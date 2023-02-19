const setAccessToken = (token) => {
  localStorage.setItem('accessToken', token);
};

const getAccessToken = () => {
  return localStorage.getItem('accessToken');
}

const removeAccessToken = () => {
  localStorage.removeItem('accessToken');
}

const AccessTokenService = {
  setAccessToken,
  getAccessToken,
  removeAccessToken
};

export default AccessTokenService;

