import { useMutation } from '@tanstack/react-query';

import { axiosService } from '../axios-service';

interface Payload {
  email: string;
}

export const useRecoverPassword = () => {
  return useMutation<any, unknown, Payload>({
    mutationFn: async (payload) => {
      return axiosService
        .post('/admin/reset-password', payload)
        .then((res) => res.data);
    },
  });
};
