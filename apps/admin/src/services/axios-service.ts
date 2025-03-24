import axios from "axios";
// import { getSession } from "next-auth/react";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
export const authURL = `${baseURL}/auth`;

export const axiosService = axios.create({
  baseURL: authURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// axiosService.interceptors.request.use(
//   async (config) => {
//     const session = await getSession();

//     // If a token is found, add it to the headers
//     if (session?.user.accessToken) {
//       config.headers.Authorization = `Bearer ${session.user.accessToken}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// axiosService.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     // Handle the error response here ...

//     return Promise.reject(error);
//   },
// );
