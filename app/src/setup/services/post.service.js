import axios from 'axios';
import config from '../config/axios.config';
import AccessTokenService from './token.service';

const host = 'http://localhost:8000/api';

const getAll = async () => {
  const response = await axios.get(host + '/posts');
  return response.data;
}

const getOne = async (id) => {
  const response = await axios.get(host + '/posts/' + id);
  return response.data;
}

const create = async (post) => {
  const response = await axios.post(host + '/posts', post, config());
  return response.data;
}

const update = async (id, post) => {
  const response = await axios.put(host + '/posts/' + id, post, config());
  return response.data;
}

const remove = async (id) => {
  const response = await axios.delete(host + '/posts/' + id, config());
  return response.data;
}

const PostService = {
  getAll,
  getOne,
  create,
  update,
  remove
}

export default PostService;