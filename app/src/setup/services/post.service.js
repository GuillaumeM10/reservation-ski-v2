import axios from 'axios';

const host = 'http://localhost:8000/api';

const getAll = async () => {
  const response = await axios.get(host + '/posts');
  console.log(response.data);
  return response.data;
}

const getOne = async (id) => {
  const response = await axios.get(host + '/posts/' + id);
  return response.data;
}

const create = async (post) => {
  const response = await axios.post(host + '/posts', post);
  return response.data;
}

const update = async (id, post) => {
  const response = await axios.put(host + '/posts/' + id, post);
  return response.data;
}

const remove = async (id) => {
  const response = await axios.delete(host + '/posts/' + id);
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