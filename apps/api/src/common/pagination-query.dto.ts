import { IsNumber, IsOptional } from "class-validator";

export class PaginationQueryDto {
  @IsOptional()
  @IsNumber()
  offset: number;

  @IsOptional()
  @IsNumber()
  limit: number;
}
