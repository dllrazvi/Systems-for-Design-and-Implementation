
import React, { useState } from 'react';
import { F1Driver } from '../types';
import './AddF1DriverForm.css';

interface AddF1DriverFormProps {
  onAdd: (driver: F1Driver) => void;
}

const AddF1DriverForm: React.FC<AddF1DriverFormProps> = ({ onAdd }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !name || !team || !age) {
      alert('Please fill in all fields');
      return;
    }
    const ageValue = parseInt(age);
    if (isNaN(ageValue) || ageValue <= 0) {
      alert('Please enter a valid age');
      return;
    }
    const newDriver: F1Driver = {
      id: parseInt(id),
      name,
      team,
      age: ageValue,
    };
    onAdd(newDriver);
    setName('');
    setTeam('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add F1 Driver</h2>
      <input type="number" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Team" value={team} onChange={(e) => setTeam(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <button type="submit">Add Driver</button>
    </form>
  );
};

export default AddF1DriverForm;
