import { applyDecorators } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { IsAdmin } from "src/services/auth/decorators/is-admin.decorator";

export const AdminOnly = () => {
  return applyDecorators(
    IsAdmin(),
    ApiOperation({ summary: "Accessible only with admin credentials." }),
  );
};
