import axios from 'axios';

export const auth = (email: string, password: string) =>
  axios.get('/api/auth', {
    params: { email, password }
  });
