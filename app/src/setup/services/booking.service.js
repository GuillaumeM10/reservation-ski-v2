import axios from 'axios';

const host = 'http://localhost:8000/api';

const getAll = async () => {
  const response = await axios.get(host + '/bookings');
  return response.data;
}

const getOne = async (id) => {
  const response = await axios.get(host + '/bookings/' + id);
  return response.data;
}

const create = async (booking) => {
  const response = await axios.post(host + '/bookings', booking);
  return response.data;
}

const update = async (id, booking) => {
  const response = await axios.put(host + '/bookings/' + id, booking);
  return response.data;
}

const remove = async (id) => {
  const response = await axios.delete(host + '/bookings/' + id);
  return response.data;
}

const BookingService = {
  getAll,
  getOne,
  create,
  update,
  remove
}

export default BookingService;