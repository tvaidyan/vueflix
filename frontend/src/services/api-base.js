import router from "@/router";
import axios from "axios";

const baseURL = "https://localhost:5001/api";

const instance = axios.create({ baseURL });

instance.interceptors.request.use(async (request) => {
  const token = sessionStorage.getItem("token");

  if (token) {
    request.headers.common.Authorization = `Bearer ${token}`;
  }
  // TODO: set a global progress bar ON
  return request;
});

instance.interceptors.response.use(
  function (response) {
    // TODO: set progress bar OFF
    return response;
  },
  function (error) {
    if (error.response.status === 401 || error.response.status === 403) {
      sessionStorage.removeItem("token");
      if (router.currentRoute.path) {
        if (router.currentRoute.name === "login") {
          // do nothing
        } else {
          router.push(`/?redirectAfterLogin=${router.currentRoute.path}`);
        }
      } else {
        router.push({ name: "login" });
      }
    }
    return Promise.reject(error);
  }
);
