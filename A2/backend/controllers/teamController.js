import { teams } from '../data/teams.js';

export const getAllTeams = (req, res) => {
  res.json(teams);
};

export const getTeamById = (req, res) => {
  const id = parseInt(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) res.json(team);
  else res.status(404).json({ message: 'Team not found' });
};

export const createTeam = (req, res) => {
  const { id, name } = req.body;

  if (id == null || typeof id !== 'number') return res.status(400).json({ message: 'Valid ID is required' });
  if (!name || typeof name !== 'string') return res.status(400).json({ message: 'Name is required' });

  const exists = teams.find(t => t.id === id);
  if (exists) return res.status(409).json({ message: 'Team with this ID already exists' });

  const newTeam = { id, name };
  teams.push(newTeam);
  res.status(201).json(newTeam);
};
