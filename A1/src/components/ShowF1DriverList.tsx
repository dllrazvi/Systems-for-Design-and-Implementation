
import React from 'react';
import { F1Driver } from '../types';
import './ShowF1DriverList.css';

interface Props {
  drivers: F1Driver[];
  isLoading: boolean;
  minAge: number;
  range: number;
}


const F1DriverList: React.FC<Props> = ({ drivers, isLoading, minAge, range }) => {
  if (isLoading) return <p>Loading...</p>;
  if (drivers.length === 0) return <p>No drivers available</p>;

  return (
    <div style={{ marginBottom: '1rem' }}>
      <h2>Driver List</h2>
      <ul>
  {drivers.map(driver => (
    <li key={driver.id}>
      <strong>{driver.name}</strong> – {driver.team} – 
      Age: <span style={{
        color: driver.age <= minAge + range / 3
          ? 'lightgreen'
          : driver.age <= minAge + (2 * range / 3)
          ? 'gold'
          : 'orangered'
      }}>{driver.age}</span>
    </li>
  ))}
</ul>

    </div>
  );
};

export default F1DriverList;
