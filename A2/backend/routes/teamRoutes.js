import express from 'express';
import { getAllTeams, getTeamById, createTeam } from '../controllers/teamController.js';

const router = express.Router();

router.get('/teams', getAllTeams);
router.get('/teams/:id', getTeamById);
router.post('/teams', createTeam); 

export { router };
