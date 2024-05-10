import { useMutation } from '@tanstack/react-query';

import { authHttpService } from '@apis/http-service';

type Payload = {
  email: string;
};

export const useRecoverPassword = () => {
  return useMutation<any, unknown, Payload>({
    mutationFn: async (payload) => {
      return await authHttpService
        .post('/admin/reset-password', payload)
        .then((res) => res.data);
    },
  });
};
