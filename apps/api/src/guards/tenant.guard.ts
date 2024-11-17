import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";

import { TenantService } from "src/app/tenant/tenant.service";
import { NO_TENANT_GAURD } from "../decorators/no-tenant.decorator";

@Injectable()
export class TenantGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private tenantService: TenantService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const tenantId = request.headers["tenant-id"] || request.params.id;

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

    const tenant = await this.tenantService.findById(tenantId);

    if (!tenant.is_active) {
      throw new ForbiddenException("Tenant is inactive!");
    }

    return true;
  }
}
