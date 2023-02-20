import axios from 'axios';
import config from '../config/axios.config';

const host = 'http://localhost:8000/api';

const getAll = async () => {
  const response = await axios.get(host + '/shops');
  return response.data;
}

const getOne = async (id) => {
  const response = await axios.get(host + '/shops/' + id);
  return response.data;
}

const create = async (shop) => {
  const response = await axios.post(host + '/shops', shop, config());
  return response.data;
}

const update = async (id, shop) => {
  const response = await axios.put(host + '/shops/' + id, shop, config());
  return response.data;
}

const remove = async (id) => {
  const response = await axios.delete(host + '/shops/' + id, config());
  return response.data;
}

const ShopService = {
  getAll,
  getOne,
  create,
  update,
  remove
}

export default ShopService;