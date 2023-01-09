const express = require('express');
const request = require('supertest');
const msg = require('../routes/privateMessages');

describe('get all messages', () => {
//Test pour la route de recupération de tous les messages
it('should return a status 200', async () => {
  const response = await request(express).get('/');
  expect(response.statusCode).toBe(200);
  });
});

describe('get one message by its ID', () => {
//Test pour la route qui nous retourne un message par son ID
it('should return a status 200', async () => {
  const response = await request(express).get('/:id');
  expect(response.statusCode).toBe(200);
  });
});


describe('create a message', () => {
//Test pour la route qui poste un message
it('should return a status 200 & create a message', async () => {
  const response = await request(express).post('');
  expect(response.statusCode).toBe(201);
  expect(response.text).toBe('message Created');
  });
});

describe('update a message', () => {
//Test pour la route qui update un message
it('should return a status 200 & update a message', async () => {
  const response = await request(express).post('/:id');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('message Updated');
  });
});

describe('delete a message', () => {
//Test pour la route qui delete un message
it('should return a status 200 & delete a message', async () => {
  const response = await request(express).delete('/:id');
  expect(response.statusCode).toBe(204);
  });
});
