import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { ActiveAdminType, ActiveUserType } from "src/types/user.type";

export const ActiveUser = createParamDecorator(
  (
    field: keyof ActiveUserType | keyof ActiveAdminType | undefined,
    ctx: ExecutionContext,
  ) => {
    const request = ctx.switchToHttp().getRequest();
    const user: ActiveUserType | ActiveAdminType | undefined = request["user"];
    return field ? user?.[field] : user;
  },
);
