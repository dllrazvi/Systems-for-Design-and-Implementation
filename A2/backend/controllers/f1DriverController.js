import { f1Drivers as driverData } from '../data/f1Drivers.js';

let f1Drivers = [...driverData];

// GET all drivers with filtering and sorting
export const getAllF1Drivers = (req, res) => {
  let results = [...f1Drivers];

  // Filtering
  if (req.query.team) {
    const teamFilter = req.query.team.toLowerCase();
    results = results.filter(d => d.team.toLowerCase() === teamFilter);
  }

  // Sorting
  if (req.query.sort) {
    const sortField = req.query.sort;
    const sortOrder = req.query.order === 'desc' ? -1 : 1;

    results = results.sort((a, b) => {
      if (typeof a[sortField] === 'string') {
        return a[sortField].localeCompare(b[sortField]) * sortOrder;
      } else if (typeof a[sortField] === 'number') {
        return (a[sortField] - b[sortField]) * sortOrder;
      } else {
        return 0;
      }
    });
  }

  res.json(results);
};

// GET driver by ID
export const getF1DriverById = (req, res) => {
  const id = parseInt(req.params.id);
  const driver = f1Drivers.find(d => d.id === id);
  if (!driver) return res.status(404).json({ message: 'Driver not found' });
  res.json(driver);
};

// POST create driver
export const createF1Driver = (req, res) => {
  const { id, name, team, age } = req.body;

  if (id == null || typeof id !== 'number') return res.status(400).json({ message: 'Valid ID is required' });
  if (!name || typeof name !== 'string') return res.status(400).json({ message: 'Name is required' });
  if (!team || typeof team !== 'string') return res.status(400).json({ message: 'Team is required' });
  if (age == null || typeof age !== 'number' || age <= 0) return res.status(400).json({ message: 'Valid age is required' });

  const exists = f1Drivers.find(d => d.id === id);
  if (exists) return res.status(409).json({ message: 'Driver with this ID already exists' });

  const newDriver = { id, name, team, age };
  f1Drivers.push(newDriver);

  driverData.length = 0;
  driverData.push(...f1Drivers);

  res.status(201).json(newDriver);
};

// PUT update driver
export const updateF1Driver = (req, res) => {
  const id = parseInt(req.params.id);
  const driverIndex = f1Drivers.findIndex(d => d.id === id);
  if (driverIndex === -1) return res.status(404).json({ message: 'Driver not found' });

  const { name, team, age } = req.body;

  if (!name || typeof name !== 'string') return res.status(400).json({ message: 'Name is required' });
  if (!team || typeof team !== 'string') return res.status(400).json({ message: 'Team is required' });
  if (age == null || typeof age !== 'number' || age <= 0) return res.status(400).json({ message: 'Valid age is required' });

  f1Drivers[driverIndex] = { id, name, team, age };
  res.json(f1Drivers[driverIndex]);
};

// DELETE driver
export const deleteF1Driver = (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = f1Drivers.length;
  f1Drivers = f1Drivers.filter(d => d.id !== id);
  if (f1Drivers.length === initialLength) return res.status(404).json({ message: 'Driver not found' });
  res.status(204).end();
};
