import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { TenantService } from "../tenant.service";
import { Reflector } from "@nestjs/core";
import { NO_TENANT_GAURD } from "../decorator/no-tenant-guard";

@Injectable()
export class TenantGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private tenantService: TenantService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const tenantId = request.headers["tenant-id"];

    const skipTenantGuard = this.reflector.get(
      NO_TENANT_GAURD,
      context.getHandler(),
    );

    if (skipTenantGuard) {
      return true;
    }

    if (!tenantId) {
      throw new BadRequestException("Tenant id is missing in request headers!");
    }

    const tenant = await this.tenantService.findById();

    if (!tenant) {
      throw new NotFoundException("Invalid tenant id!");
    }

    if (!tenant.is_active) {
      throw new ForbiddenException("Tenant is inactive!");
    }

    return true;
  }
}
