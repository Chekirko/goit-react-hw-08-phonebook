import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function getContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContactWithName(name, number) {
  const newContact = { name: name, number: number };
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
}

export async function deleteContactById(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

export async function registerNewUser(credentials) {
  const newUser = { ...credentials };
  const { data } = await axios.post(`/users/signup`, newUser);
  return data;
}

export async function logInUser(credentials) {
  const user = { ...credentials };
  const { data } = await axios.post(`/users/login`, user);
  return data;
}

export async function logOutUser() {
  const { data } = await axios.post(`/users/logout`);
  return data;
}
