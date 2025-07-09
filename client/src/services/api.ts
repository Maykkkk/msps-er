import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { mockLogin, mockAuthCheck } from './mockBackend';

// Define types for our mock responses
interface LoginResponse {
  access_token: string;
  user: {
    id: string;
    email: string;
    role: string;
    firstName: string;
    lastName: string;
  };
}

interface AuthCheckResponse {
  user: {
    id: string;
    email: string;
    role: string;
    firstName: string;
    lastName: string;
  } | null;
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
});

// Type-safe mock implementation
if (process.env.NODE_ENV === 'development') {
  // Properly typed POST override
  const originalPost = api.post;
  api.post = async function <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    if (url === '/auth/login') {
      // Type guard for login data
      if (data && typeof data === 'object' && 'email' in data && 'password' in data) {
        const loginData = data as { email: string; password: string };
        const response = await mockLogin(loginData.email, loginData.password);
        return { 
          data: response as T,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: config || {}
        } as R;
      }
    }
    return originalPost(url, data, config);
  };

  // Properly typed GET override
  const originalGet = api.get;
  api.get = async function <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    if (url === '/auth/me') {
      const response = await mockAuthCheck(localStorage.getItem('token') || '');
      return {
        data: response as T,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: config || {}
      } as R;
    }
    return originalGet(url, config);
  };
}

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;