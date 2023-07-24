import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
});

export const upload = (data) => {
  const { images, urlweb, urlrepository, description, email } = data;
  const Id = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: token,
    "X-User-Id": Id,
    email,
  };
  const formdata = new FormData();
  images.map((img) => formdata.append("images", img));
  formdata.append(
    "data",
    JSON.stringify({ urlweb, urlrepository, description, email })
  );
  //   console.log(formdata.getAll("data"));
  return apiInstance.post("/project", formdata, { headers });
};

export const getProjects = () => {
  return apiInstance.get("/project");
};

export const getProjectsPage = (page) => {
  return apiInstance.get(`/project/${page}`);
};

export const deleteProject = (data) => {
  const { id, email } = data;
  const Id = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: token,
    "X-User-Id": Id,
    email,
  };
  return apiInstance.delete(`/project/${id}`, { headers });
};
