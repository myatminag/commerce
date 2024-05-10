import NextAuth from 'next-auth';

import { option } from './option';

const authHandler = NextAuth(option);

export { authHandler as GET, authHandler as POST };
