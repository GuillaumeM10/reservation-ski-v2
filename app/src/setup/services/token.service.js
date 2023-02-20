import axios from "axios";
import config from '../config/axios.config';


const setAccessToken = async(accessToken) => {
  localStorage.setItem("accessToken", accessToken);
  //decode token
  const token = accessToken.split(".")[1];
  const decodedToken = JSON.parse(atob(token));
  localStorage.setItem("email", decodedToken.email);

  const response = await axios.post('http://localhost:8000/auth/user', {"email": decodedToken.email}, config());
  localStorage.setItem("userId", response.data._id);
  if(response.data.shop) {localStorage.setItem("shopId", response.data.shop)};
};

const removeAccessToken = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('email');
  localStorage.removeItem('userId');
  localStorage.removeItem('shopId');


}

const getAccessToken = async() => {
  const accessToken = await localStorage.getItem("accessToken");

  return accessToken;
};

const berer = async() => {
  const token = await getAccessToken();

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
}

const AccessTokenService = {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
  berer
};

export default AccessTokenService;
