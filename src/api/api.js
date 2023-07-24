import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
});

export const postForm = (data) => {
  const { name, email, message } = data;
  const formData = { name: name.trim(), email, message: message.trim() };
  return apiInstance.post("/send", formData);
};
