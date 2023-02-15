import axios from 'axios';

const host = 'http://localhost:8000/api';

const getAll = async () => {
  const response = await axios.get(host + '/comments');
  console.log(response.data);
  return response.data;
}

const getOne = async (id) => {
  const response = await axios.get(host + '/comments/' + id);
  return response.data;
}

const create = async (comment) => {
  const response = await axios.post(host + '/comments', comment);
  return response.data;
}

const update = async (id, comment) => {
  const response = await axios.put(host + '/comments/' + id, comment);
  return response.data;
}

const remove = async (id) => {
  const response = await axios.delete(host + '/comments/' + id);
  return response.data;
}

const CommentService = {
  getAll,
  getOne,
  create,
  update,
  remove
}

export default CommentService;