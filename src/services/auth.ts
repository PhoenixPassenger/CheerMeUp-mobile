import api from './api';
interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn() {
  api
    .post('/login', {
      email: 'Finn',
      password: 'Williams',
    })
    .then((response) => {
      return response;
    });
}
