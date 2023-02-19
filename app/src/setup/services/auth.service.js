import axios from 'axios';
import AccessTokenService from './token.service';

const host = 'http://localhost:8000/auth';

const signin = async (credentials) => {
  const response = await axios.post(host + '/signin', credentials);
  console.log(response.data);
  AccessTokenService.setAccessToken(response.data.accessToken);
  return response.data;
}

const signup = async (credentials) => {
  const response = await axios.post(host + '/signup', credentials);
  return response.data;
}

const AuthService = {
  signin,
  signup
}

export default AuthService;