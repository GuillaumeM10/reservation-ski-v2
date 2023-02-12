import axios from 'axios';

const getAll = async () => {
  const response = await axios.get('http://dummyjson.com/products');
  return response.data;
}

const PostService = {
  getAll
}

export default PostService;