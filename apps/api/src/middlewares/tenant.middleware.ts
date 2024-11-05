import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // ensure correct header name
    const tenantId = req.headers["x-tenant-id"] as string;

    if (tenantId) {
      req["tenant"] = tenantId;
    } else {
      throw new HttpException("Missing Tenant Header!", HttpStatus.BAD_REQUEST);
    }

    next();
  }
}
