import { Reflector } from "@nestjs/core";
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { Roles } from "../decorators/roles.decorator";
import { PrismaService } from "src/services/prisma/prisma.service";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prismaService: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get(Roles, context.getHandler());

    if (!roles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    const userId = user?.sub;

    if (!userId) {
      throw new ForbiddenException("Invalid user!");
    }

    const requestUser = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!requestUser) {
      throw new NotFoundException("User not found!");
    }

    const isAllowed = roles.includes(requestUser.role);

    if (!isAllowed) {
      throw new ForbiddenException("Access denied!");
    }

    return true;
  }
}
