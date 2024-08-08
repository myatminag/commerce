import { axiosService } from '../axios-service';

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
  return axiosService.post('/admin-login', data).then((res) => res.data);
};
