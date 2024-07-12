import { authHttpService } from '@apis/http-service';

interface AdminSignIn {
  email: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
  refreshToken: string;
  userId: string;
  email: string;
  exp: number;
}

export const signInService = async (
  data: AdminSignIn,
): Promise<SignInResponse> => {
  return authHttpService.post('/admin-login', data).then((res) => res.data);
};
