import { Transform } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class PaginationQueryDto {
  @IsNumber()
  page: number = 1;

  @IsNumber()
  size: number = 10;

  @IsOptional()
  @Transform(({ value }) => (value ? Number(value) : 1))
  @IsNumber()
  offset: number = 1;

  @IsOptional()
  @Transform(({ value }) => (value ? Number(value) : 10))
  @IsNumber()
  limit: number = 10;
}
