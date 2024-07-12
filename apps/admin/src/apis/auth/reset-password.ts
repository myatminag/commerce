import { useMutation } from '@tanstack/react-query';

import { authHttpService } from '@apis/http-service';

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
      return authHttpService.post(
        `/admin/reset-password/${sessionToken}`,
        payload,
      );
    },
  });
};
