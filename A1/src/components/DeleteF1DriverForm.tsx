
import React, { useState } from 'react';
import { F1Driver } from '../types';
import './DeleteF1DriverForm.css';

interface DeleteF1DriverFormProps {
  onDelete: (id: number) => void;
  drivers: F1Driver[];
}

const DeleteF1DriverForm: React.FC<DeleteF1DriverFormProps> = ({ onDelete, drivers }) => {
  const [id, setId] = useState<number>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) {
      alert('Please enter an ID');
      return;
    }

    const exists = drivers.some(driver => driver.id === id);
    if (!exists) {
      alert('Driver with this ID does not exist');
      return;
    }

    onDelete(id);
    setId(undefined);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Delete F1 Driver</h2>
      <input type="number" placeholder="ID" value={id || ''} onChange={(e) => setId(parseInt(e.target.value))} />
      <button type="submit">Delete Driver</button>
    </form>
  );
};

export default DeleteF1DriverForm;
