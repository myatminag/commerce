import type { AxiosError } from 'axios';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { signInService } from '@apis/auth/sign-in';

export const option: NextAuthOptions = {
  pages: {
    signIn: '/',
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const res = await signInService({
            email: credentials?.email || '',
            password: credentials?.password || '',
          });

          const user = {
            ...res,
            id: res.userId,
          };

          return user;
        } catch (error: unknown) {
          const axiosError = error as AxiosError;
          const errData = axiosError.response?.data as { message: string };
          throw new Error(errData.message || 'Unkown error occured!');
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.user = user;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.accessToken = token.user.accessToken;
        session.user.refreshToken = token.user.refreshToken;
        session.user.email = token.user.email;
        session.user.userId = token.user.userId;
        session.user.exp = token.user.exp;
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
