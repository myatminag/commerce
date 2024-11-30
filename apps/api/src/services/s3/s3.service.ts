import { S3Client } from "@aws-sdk/client-s3";
import { BadRequestException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { AppConfig } from "src/config/type";

@Injectable()
export class S3Service {
  private s3Client: S3Client;
  private backetName = this.configService.get("S3_BUCKET_NAME");

  constructor(private configService: ConfigService<AppConfig>) {
    const s3Region = this.configService.get("S3_REGION");

    if (!s3Region) {
      throw new BadRequestException(
        "S3_REGION not found in environment variables!",
      );
    }

    this.s3Client = new S3Client({
      region: s3Region,
      credentials: {
        accessKeyId: this.configService.get("S3_ACCESS_KEY"),
        secretAccessKey: this.configService.get("S3_SECRET_ACCESS_KEY"),
      },
      forcePathStyle: true,
    });
  }
}
