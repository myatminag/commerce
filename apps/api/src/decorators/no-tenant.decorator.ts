import { SetMetadata } from "@nestjs/common";

export const NO_TENANT_GAURD = "NO_TENANT_GAURD";
export const NoTenantGuard = () => SetMetadata(NO_TENANT_GAURD, true);
