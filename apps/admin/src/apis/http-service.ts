import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { getSession } from 'next-auth/react';

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
export const authURL = `${baseURL}/auth`;

export const authHttpService = axios.create({
  baseURL: authURL,
  headers: {
    Accept: 'application/json',
  },
});

export const baseUrlService = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
});

const httpRequestInterceptor = (service: AxiosInstance) => {
  return service.interceptors.request.use(
    async (config) => {
      const session = await getSession();

      if (session?.user.accessToken) {
        config.headers['Authorization'] = `Bearer ${session.user.accessToken}`;
      }

      return config;
    },
    (error) => {
      return Promise.resolve(error);
    },
  );
};

httpRequestInterceptor(baseUrlService);
