const express = require('express');
const request = require('supertest');
const msg = require('../routes/rooms');

describe('get all rooms', () => {
//Test pour la route de recupération de toutes les rooms
it('should return a status 200', async () => {
  const response = await request(express).get('/');
  expect(response.statusCode).toBe(200);
  });
});

describe('get one room by its ID', () => {
//Test pour la route qui nous retourne une room par son ID
it('should return a status 200', async () => {
  const response = await request(express).get('/:id');
  expect(response.statusCode).toBe(200);
  });
});

describe('', () => {
//Test pour la route qui poste une room
it('should return a status 200 & create a message', async () => {
  const response = await request(express).post('');
  expect(response.statusCode).toBe(201);
  expect(response.text).toBe('message Created');
  });
});

describe('update a room', () => {
//Test pour la route qui update une room
it('should return a status 200 & update a message', async () => {
  const response = await request(express).patch('/:id');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('message Updated');
  });
});

describe('delete a room', () => {
//Test pour la route qui delete une room
it('should return a status 200 & delete a message', async () => {
  const response = await request(express).delete('/:id');
  expect(response.statusCode).toBe(204);
  });
});
