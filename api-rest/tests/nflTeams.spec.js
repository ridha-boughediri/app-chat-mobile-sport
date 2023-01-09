const express = require('express');
const request = require('supertest');
const user = require('../routes/nflTeams');

describe('get all NFL teams', () => {
//Test pour la route qui nous retourne une liste de team
it('should return a status 200', async () => {
  const response = await request(express).get('/');
  expect(response.statusCode).toBe(200);
  });
});

describe('get an NFL team by its ID', () => {
//Test pour la route qui nous retourne une team par son ID
it('should return a status 200', async () => {
  const response = await request(express).get('/:id');
  expect(response.statusCode).toBe(200);
  });
});


describe('create an NFL team', () => {
//Test pour la route qui crée une team
  it('should return a status 201, create a NFL TEAM & send message', async () => {
    const response = await request(express).post('/');
    expect(response.statusCode).toBe(201);
    expect(response.text).toBe('User Created');
  });
});

describe('update an NFL team', () => {
  //Test pour la route qui update une team
  it('should return a status 200, update an NFL TEAM by its ID & send message', async () => {
    const response = await request(express).patch('/:id');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('User Updated');
  });
});


describe('delete an NFL team', () => {
    //Test pour la route qui delete une team
    it('should return a status 200, delete an NFL TEAM by its ID', async () => {
      const response = await request(express).delete('/:id');
      expect(response.statusCode).toBe(204);
    });
  });