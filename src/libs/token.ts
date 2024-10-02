import { setupApiToken } from './api';

export const setupToken = (token: string) => {
  if (token) {
    localStorage.setItem('token', token);
    setupApiToken(token);
  }
};
