import { IsEnum } from "class-validator";

import { Status } from "src/lib/constants";

export class StatusDto {
  @IsEnum(Status)
  status: Status;
}
