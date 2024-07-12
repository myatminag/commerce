import { useMutation } from '@tanstack/react-query';

import { authHttpService } from '@apis/http-service';

interface Payload {
  email: string;
}

export const useRecoverPassword = () => {
  return useMutation<any, unknown, Payload>({
    mutationFn: async (payload) => {
      return authHttpService
        .post('/admin/reset-password', payload)
        .then((res) => res.data);
    },
  });
};
