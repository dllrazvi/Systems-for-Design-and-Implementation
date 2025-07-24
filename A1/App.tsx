
import React, { useState } from 'react';
import { F1Driver } from './types';
import AddF1DriverForm from './src/components/AddF1DriverForm';
import DeleteF1DriverForm from './src/components/DeleteF1DriverForm';
import UpdateF1DriverForm from './src/components/UpdateF1DriverForm';
import GetF1DriverByIdForm from './src/components/GetF1DriverByIdForm';
import F1DriverList from './src/components/ShowF1DriverList';

function App() {
  const [drivers, setDrivers] = useState<F1Driver[]>([
    { id: 1, name: 'Max Verstappen', team: 'Red Bull', age: 26 },
    { id: 2, name: 'Lewis Hamilton', team: 'Mercedes', age: 39 },
    { id: 3, name: 'Lando Norris', team: 'McLaren', age: 24 },
  ]);

  const [filterName, setFilterName] = useState('');
  const [sortByAge, setSortByAge] = useState<'asc' | 'desc' | null>(null);

  const filteredDrivers = drivers
    .filter((d) => d.name.toLowerCase().includes(filterName.toLowerCase()))
    .sort((a, b) => {
      if (!sortByAge) return 0;
      return sortByAge === 'asc' ? a.age - b.age : b.age - a.age;
    });
const ages = drivers.map(d => d.age);
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);
const range = maxAge - minAge;


  const handleAddDriver = (driver: F1Driver) => {
    if (drivers.some((d) => d.id === driver.id)) {
      alert('ID already exists!');
      return;
    }
    setDrivers([...drivers, driver]);
  };

  const handleDeleteDriver = (id: number) => {
    setDrivers(drivers.filter((d) => d.id !== id));
  };

  const handleUpdateDriver = (id: number, updatedDriver: F1Driver) => {
    setDrivers(drivers.map((d) => (d.id === id ? updatedDriver : d)));
  };

  const handleGetDriverById = async (id: number): Promise<F1Driver | null> => {
    const found = drivers.find((d) => d.id === id);
    return found || null;
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>F1 Driver Manager (Frontend Only)</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Filter by name"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
        <button onClick={() => setSortByAge('asc')}>Sort Age ↑</button>
        <button onClick={() => setSortByAge('desc')}>Sort Age ↓</button>
        <button onClick={() => setSortByAge(null)}>Reset Sort</button>
      </div>

      <F1DriverList drivers={filteredDrivers} isLoading={false} minAge={minAge} range={range} />
      <AddF1DriverForm onAdd={handleAddDriver} />
      <DeleteF1DriverForm onDelete={handleDeleteDriver} drivers={drivers} />
      <UpdateF1DriverForm onUpdate={handleUpdateDriver} />
      <GetF1DriverByIdForm onGetDriverById={handleGetDriverById} />
    </div>
  );
}

export default App;
