import {
  applyDecorators,
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from "@nestjs/common";
import { ApiQuery } from "@nestjs/swagger";
import { Request } from "express";

export interface Pagination {
  limit: number;
  offset: number;
  page: number;
  size: number;
}

export const Pagination = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Pagination => {
    const req: Request = ctx.switchToHttp().getRequest();
    const page = parseInt(req.query.page as string) || 1;
    const size = parseInt(req.query.size as string) || 10;

    if (isNaN(page) || page < 0 || isNaN(size) || size < 0) {
      throw new BadRequestException("Invalid pagination params!");
    }

    const limit = size;
    const offset = (page - 1) * size;

    return { limit, offset, page, size };
  },
);

export const ApiPagination = () => {
  return applyDecorators(
    ApiQuery({
      name: "page",
      required: true,
      type: Number,
      default: 1,
    }),
    ApiQuery({
      name: "size",
      required: true,
      type: Number,
      default: 10,
    }),
  );
};
