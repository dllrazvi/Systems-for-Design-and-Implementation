
import React, { useState } from 'react';
import { F1Driver } from '../types';
import './GetF1DriverByIdForm.css';

interface GetF1DriverByIdFormProps {
  onGetDriverById: (id: number) => Promise<F1Driver | null>;
}

const GetF1DriverByIdForm: React.FC<GetF1DriverByIdFormProps> = ({ onGetDriverById }) => {
  const [id, setId] = useState('');
  const [driver, setDriver] = useState<F1Driver | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const driverId = parseInt(id);
    if (isNaN(driverId)) {
      alert('Invalid ID');
      return;
    }

    const found = await onGetDriverById(driverId);
    setDriver(found);
    setId('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Get Driver By ID</h2>
        <input type="number" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="submit">Get Driver</button>
      </form>
      {driver && (
        <div className="driver-details">
          <p><strong>ID:</strong> {driver.id}</p>
          <p><strong>Name:</strong> {driver.name}</p>
          <p><strong>Team:</strong> {driver.team}</p>
          <p><strong>Age:</strong> {driver.age}</p>
        </div>
      )}
    </div>
  );
};

export default GetF1DriverByIdForm;
