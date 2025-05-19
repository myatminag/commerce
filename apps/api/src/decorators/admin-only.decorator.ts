import { applyDecorators } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";

export const AdminOnly = () => {
  return applyDecorators(
    ApiOperation({ summary: "Accessible only with admin credentials." }),
  );
};
