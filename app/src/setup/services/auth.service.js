import axios from 'axios';
import config from '../config/axios.config';
import AccessTokenService from './token.service';

const host = 'http://localhost:8000/auth';

const signin = async (credentials) => {
  const response = await axios.post(host + '/signin', credentials);
  AccessTokenService.setAccessToken(response.data.accessToken);
  return response.data;
}

const signup = async (credentials) => {
  const response = await axios.post(host + '/signup', credentials);
  return response.data;
}

const user = async (email) => {
  const response = await axios.post(host + '/user', {"email": email}, config());
  return response.data;
}

const forgotPassword = async (data) => {
  const response = await axios.post( host + '/forgot-password', data);
  return response.data;
};

const resetPassword = async (id, data) => {
  const response = await axios.post(host + '/reset-password/' + id, data);
  return response.data;
};

const AuthService = {
  signin,
  signup,
  user,
  forgotPassword,
  resetPassword
}

export default AuthService;