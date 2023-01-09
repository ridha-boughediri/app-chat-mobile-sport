const express = require('express');
const request = require('supertest');
const auth = require('../routes/auth');

describe('authentication', () => {
//Test pour la route de connexion
it('should generate a token & return a status 200', async () => {
  const response = await request(express).post('/login');
  expect(response.statusCode).toBe(200);
});
})

