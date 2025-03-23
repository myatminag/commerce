import { Module } from "@nestjs/common";

import { S3Service } from "./s3.service";
import { S3Controller } from "./s3.controller";
import { ConfigModule } from "@nestjs/config";
import s3Config from "src/config/s3.config";

@Module({
  imports: [ConfigModule.forFeature(s3Config)],
  controllers: [S3Controller],
  providers: [S3Service],
})
export class S3Module {}
