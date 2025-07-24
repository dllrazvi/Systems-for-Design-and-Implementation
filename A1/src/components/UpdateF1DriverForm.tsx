
import React, { useState } from 'react';
import { F1Driver } from '../types';
import './UpdateF1DriverForm.css';

interface UpdateF1DriverFormProps {
  onUpdate: (id: number, updatedDriver: F1Driver) => void;
}

const UpdateF1DriverForm: React.FC<UpdateF1DriverFormProps> = ({ onUpdate }) => {
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
      alert('Invalid age');
      return;
    }

    const updatedDriver: F1Driver = {
      id: parseInt(id),
      name,
      team,
      age: ageValue,
    };

    onUpdate(updatedDriver.id, updatedDriver);
    setId('');
    setName('');
    setTeam('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update F1 Driver</h2>
      <input type="number" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Team" value={team} onChange={(e) => setTeam(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <button type="submit">Update Driver</button>
    </form>
  );
};

export default UpdateF1DriverForm;
