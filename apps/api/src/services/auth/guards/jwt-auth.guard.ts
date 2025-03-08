import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";

import { IS_ADMIN_KEY } from "../decorators/is-admin.decorator";
import { IS_PUBLIC_KEY } from "../decorators/is-public.decorator";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const isAdminRoute = this.reflector.getAllAndOverride<boolean>(
      IS_ADMIN_KEY,
      [context.getHandler(), context.getClass()],
    );

    const guard = isAdminRoute
      ? new (AuthGuard("admin-jwt"))()
      : new (AuthGuard("user-jwt"))();

    return guard.canActivate(context) as boolean;
  }
}
