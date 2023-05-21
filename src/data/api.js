import axios from 'axios';

axios.defaults.baseURL = 'https://6469ea53183682d6144917ab.mockapi.io';

export const getAllUsers = async () => {
  try {
    const res = await axios.get('/users');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getCurrentUser = async id => {
  try {
    const res = await axios.get(`/users/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const delOldUser = async id => {
  try {
    const res = await axios.delete(`/users/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addNewUser = async (id, body) => {
  try {
    const res = await axios.put(`/users/${id}`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
