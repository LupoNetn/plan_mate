// api.ts
import axios, { AxiosError } from "axios";
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

interface RefreshResponse {
  accessToken: string;
}

type Subscriber = (token: string) => void;

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

// ----------------------------
// REQUEST INTERCEPTOR
// ----------------------------
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// ----------------------------
// RESPONSE INTERCEPTOR + REFRESH LOGIC
// ----------------------------
let isRefreshing = false;
let refreshSubscribers: Subscriber[] = [];

function onRefreshed(token: string) {
  refreshSubscribers.forEach((cb) => cb(token));
  refreshSubscribers = [];
}

// Extend Axios request config to track retry state
interface RetryAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

api.interceptors.response.use(
  (response: AxiosResponse) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as RetryAxiosRequestConfig;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const res = await api.get<RefreshResponse>("/users/refresh-token");
          const newAccessToken = res.data.accessToken;

          localStorage.setItem("accessToken", newAccessToken);

          isRefreshing = false;
          onRefreshed(newAccessToken);
        } catch (err) {
          isRefreshing = false;
          return Promise.reject(err);
        }
      }

      return new Promise((resolve) => {
        refreshSubscribers.push((token: string) => {
          if (!originalRequest.headers) {
            originalRequest.headers = {} as InternalAxiosRequestConfig["headers"];
          }
          originalRequest.headers["Authorization"] = `Bearer ${token}`;
          resolve(api(originalRequest));
        });
      });
    }

    return Promise.reject(error);
  }
);

// ----------------------------
// EXPORT
// ----------------------------
export default api;
