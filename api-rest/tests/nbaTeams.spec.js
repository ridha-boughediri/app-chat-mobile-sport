const express = require('express');
const request = require('supertest');
const user = require('../routes/nbaTeams');


describe('get all NBA teams', () => {
//Test pour la route qui nous retourne une liste de team
it('should return a status 200', async () => {
  const response = await request(express).get('/');
  expect(response.statusCode).toBe(200);
  });
});

describe('get one team by its ID', () => {
//Test pour la route qui nous retourne une team par son ID
  it('should return a status 200', async () => {
    const response = await request(express).get('/:id');
    expect(response.statusCode).toBe(200);
    });
  });

describe('create a NBA TEAM', () => {
//Test pour la route qui crée un user
    it('should return a status 201, create a NBA TEAM & send message', async () => {
      const response = await request(express).post('/');
      expect(response.statusCode).toBe(201);
      expect(response.text).toBe('User Created');
  });
});

describe('update an NBA TEAM', () => {
//Test pour la route qui update un user
    it('should return a status 200, update an NBA TEAM by its ID & send message', async () => {
      const response = await request(express).patch('/:id');
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('User Updated');
    });
  });

describe('delete an NBA TEAM', () => {
//Test pour la route qui delete un user
     it('should return a status 200, delete an NBA TEAM by its ID', async () => {
      const response = await request(express).delete('/:id');
      expect(response.statusCode).toBe(204);
    }); 
  });