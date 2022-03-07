import supertest from 'supertest';
import app from '@app/server';

describe('/api/dummy', () => {
  test('GET', async () => {
    const result = await supertest(app).get('/api/dummy');

    expect(result.statusCode).toBe(200);
    expect(result.body.hello).toBe('world');
  });

  test('POST', async () => {
    const result = await supertest(app).post('/api/dummy');

    expect(result.statusCode).toBe(404);
    expect(result.body.name).toBe('not_found');
    expect(result.body.message).toBe('POST /api/dummy not found');
  });
});
