const express = require('express');
const request = require('supertest');
const user = require('../routes/users');

describe('get all users', () => {
//Test pour la route qui nous retourne une liste de user
it('should return a status 200', async () => {
  const response = await request(express).get('/');
  expect(response.statusCode).toBe(200);
  });
});


describe('get all users and show only first & last name', () => {
//Test pour la route qui nous retourne une liste de user
it('should return a status 200', async () => {
  const response = await request(express).get('/firstlast');
  expect(response.statusCode).toBe(200);
  });
});


describe('get one user by its ID', () => {
//Test pour la route qui nous retourne un user par son ID
it('should return a status 200', async () => {
  const response = await request(express).get('/:id');
  expect(response.statusCode).toBe(200);  
  });
});


describe('create a user', () => {
//Test pour la route qui crée un user
  it('should return a status 200, create an user & send message', async () => {
    const response = await request(express).post('/');
    expect(response.statusCode).toBe(201);
    expect(response.text).toBe('User Created');
  });
});


describe('update a user', () => {
//Test pour la route qui update un user
  it('should return a status 200, update an user by its ID & send message', async () => {
    const response = await request(express).patch('/:id');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('User Updated');
    });
  });

describe('delete a user', () => {
//Test pour la route qui delete un user
  it('should return a status 200, delete an user by its ID', async () => {
    const response = await request(express).delete('/:id');
    expect(response.statusCode).toBe(204);
  });
});
