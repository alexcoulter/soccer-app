// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
import { players } from './players'
import { teams } from './teams'
import { schedule } from './schedule'
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://example.com/players', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(players
  )}),
  http.get('https://example.com/schedule', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(schedule
  )}),
  http.get('https://example.com/teams', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(teams
  )}),
]