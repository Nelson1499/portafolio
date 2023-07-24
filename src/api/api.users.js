import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
});

export const Signup = (data) => {
  return apiInstance.post("/auth-signup", data);
};

export const Login = (data) => {
  return apiInstance.post("/auth-login", data).then((res) => {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("userId", res.data.userId);
  });
};
export const authGoogle = (data) => {
  return apiInstance.post("/auth-google", data).then((res) => {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("userId", res.data.userId);
  });
};

export const getAuth = () => {
  const Id = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: token,
    "X-User-Id": Id,
  };
  if(Id && token){
    return apiInstance.get(`/auth/${Id}`, { headers });
  } 
};
