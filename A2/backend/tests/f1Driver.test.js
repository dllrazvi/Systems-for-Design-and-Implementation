
import express from 'express';
import bodyParser from 'body-parser';
import request from 'supertest';
import { router } from '../routes/f1DriverRoutes.js';

const app = express();
app.use(bodyParser.json());
app.use('/api', router);

describe('F1 Driver API', () => {
  it('should create a driver', async () => {
    const res = await request(app).post('/api/f1drivers').send({
      id: 1,
      name: 'Test Driver',
      team: 'Test Team',
      age: 30
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Test Driver');
  });

  it('should get all drivers', async () => {
    const res = await request(app).get('/api/f1drivers');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get driver by ID', async () => {
    const res = await request(app).get('/api/f1drivers/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('should update driver by ID', async () => {
    const res = await request(app).put('/api/f1drivers/1').send({
      name: 'Updated Driver',
      team: 'Updated Team',
      age: 35
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Updated Driver');
  });

  it('should delete driver by ID', async () => {
    const res = await request(app).delete('/api/f1drivers/1');
    expect(res.statusCode).toEqual(204);
  });

  it('should return 404 for deleted driver', async () => {
    const res = await request(app).get('/api/f1drivers/1');
    expect(res.statusCode).toEqual(404);
  });

  it('should return 409 when creating a driver with existing ID', async () => {
    await request(app).post('/api/f1drivers').send({
      id: 2,
      name: 'Driver 2',
      team: 'Team 2',
      age: 25
    });
    const res = await request(app).post('/api/f1drivers').send({
      id: 2,
      name: 'Driver Duplicate',
      team: 'Team X',
      age: 33
    });
    expect(res.statusCode).toEqual(409);
  });

  it('should return 404 when updating non-existent driver', async () => {
    const res = await request(app).put('/api/f1drivers/999').send({
      name: 'Ghost',
      team: 'NoTeam',
      age: 40
    });
    expect(res.statusCode).toEqual(404);
  });

  it('should return 404 when deleting non-existent driver', async () => {
    const res = await request(app).delete('/api/f1drivers/999');
    expect(res.statusCode).toEqual(404);
  });

  it('should return 400 when creating driver with invalid data', async () => {
    const res = await request(app).post('/api/f1drivers').send({
      id: 3,
      team: 'Team Bad',
      age: 20
    });
    expect(res.statusCode).toEqual(400);
  });

  it('should return 400 when creating driver with negative age', async () => {
    const res = await request(app).post('/api/f1drivers').send({
      id: 4,
      name: 'Bad Driver',
      team: 'Negative Team',
      age: -10
    });
    expect(res.statusCode).toEqual(400);
  });

  it('should return 400 when updating with empty name', async () => {
    const res = await request(app).put('/api/f1drivers/2').send({
      name: '',
      team: 'Still Good',
      age: 33
    });
    expect(res.statusCode).toEqual(400);
  });

  it('should return 400 when updating with missing age', async () => {
    const res = await request(app).put('/api/f1drivers/2').send({
      name: 'Still Valid',
      team: 'Still Team'
      // missing age
    });
    expect(res.statusCode).toEqual(400);
  });
});
