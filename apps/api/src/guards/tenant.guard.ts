import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class TenantGuard implements CanActivate {
  constructor(@Inject("CONNECTION") private prismaClient: PrismaClient) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const domain = request.headers["tenant-id"] as string;

    if (!domain) {
      throw new BadRequestException("Tenant id is missing in request headers!");
    }

    const isTenantExist = await this.prismaClient.$queryRaw`
      SELECT EXISTS (
        SELECT 1 FROM information_schema.schemata
        WHERE schema_name = ${domain}
      )
    `;

    if (!isTenantExist[0].exists) {
      throw new NotFoundException("Tenant not found!");
    }

    return true;
  }
}
