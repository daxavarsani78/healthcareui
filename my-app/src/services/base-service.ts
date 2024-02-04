import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { APPLICATION, APPLICATION_TYPE, BASE_API_URL } from "../config";
import { HttpStatusCodes } from "../utility/enums";
import { getToken } from "../utility/auth-guard";

axios.interceptors.request.use(
  async (config: AxiosRequestConfig | any) => {
    config.headers["Access-Control-Allow-Origin"] = "*";
    if (config.url) {
      config.url = BASE_API_URL + config.url;
    }
    config.headers.Authorization = getToken();
    config.headers.Application = APPLICATION;
    config.headers.ApplicationType = APPLICATION_TYPE;
    return config;
  },
  (error: AxiosError) => {
    console.log("Error:", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    console.log("API call error : ", error);
    switch (error.response?.status) {
      case HttpStatusCodes.Unauthorized: {
        return undefined;
      }
      case HttpStatusCodes.Forbidden: {
        return undefined;
      }
      case HttpStatusCodes.BadRequest:
      case HttpStatusCodes.ConflictError:
      case HttpStatusCodes.ServerError:
        return Promise.reject(error);
      default:
        return Promise.reject(error);
    }
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  CancelToken: axios.CancelToken,
};
