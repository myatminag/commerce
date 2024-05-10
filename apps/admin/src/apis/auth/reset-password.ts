import { useMutation } from '@tanstack/react-query';

import { authHttpService } from '@apis/http-service';

type Payload = {
  password: string;
};

export const useSetNewPassword = ({
  sessionToken,
}: {
  sessionToken: string;
}) => {
  return useMutation<any, unknown, Payload>({
    mutationFn: async (payload) => {
      return await authHttpService.post(
        `/admin/reset-password/${sessionToken}`,
        payload,
      );
    },
  });
};
