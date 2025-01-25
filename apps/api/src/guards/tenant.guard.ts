import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { TenantService } from "src/app/tenant/tenant.service";

@Injectable()
export class TenantGuard implements CanActivate {
  constructor(private tenantService: TenantService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const domain = request.headers["tenant-id"] || request.params.id;

    if (!domain) {
      throw new BadRequestException("Tenant id is missing in request headers!");
    }

    const isTenantExist = await this.tenantService.findById(domain);

    if (!isTenantExist) {
      throw new NotFoundException("Tenant not found!");
    }

    return true;
  }
}
