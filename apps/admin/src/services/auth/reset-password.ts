import { useMutation } from '@tanstack/react-query';

import { axiosService } from '../axios-service';

interface Payload {
  password: string;
}

export const useSetNewPassword = ({
  sessionToken,
}: {
  sessionToken: string;
}) => {
  return useMutation<any, unknown, Payload>({
    mutationFn: async (payload) => {
      return axiosService.post(
        `/admin/reset-password/${sessionToken}`,
        payload,
      );
    },
  });
};
