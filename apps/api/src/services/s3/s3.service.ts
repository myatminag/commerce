import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/cloudfront-signer";
import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { v4 as uuidv4 } from "uuid";

import s3Config from "src/config/s3.config";

@Injectable()
export class S3Service {
  private s3Client: S3Client;
  private bucketName: string;
  private cloudFrontURL: string;

  constructor(
    @Inject(s3Config.KEY) private s3Configuration: ConfigType<typeof s3Config>,
  ) {
    const s3Region = this.s3Configuration.S3_REGION;
    const s3AccessKeyId = this.s3Configuration.S3_ACCESS_KEY;
    const s3SecretAccessKey = this.s3Configuration.S3_SECRET_ACCESS_KEY;

    if (!s3AccessKeyId || !s3SecretAccessKey || !s3Region) {
      throw new BadRequestException(
        "S3 accessKey, secretAccessKey, region not found in environment variables!",
      );
    }

    this.bucketName = this.s3Configuration.S3_BUCKET_NAME;
    this.cloudFrontURL = this.s3Configuration.AWS_CLOUDFRONT_URL;
    this.s3Client = new S3Client({
      region: s3Region,
      credentials: {
        accessKeyId: s3AccessKeyId,
        secretAccessKey: s3SecretAccessKey,
      },
    });
  }

  async uploadFile({ file }: { file: Express.Multer.File }) {
    const key = `${uuidv4()}`;
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
      Metadata: {
        originalName: file.originalname,
      },
    });

    await this.s3Client.send(command);
    const { signedUrl, type } = await this.getFileUrl(key);

    return {
      url: signedUrl,
      key,
      type,
    };
  }

  async getFileUrl(key: string) {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });

    try {
      const { ContentType } = await this.s3Client.send(command);

      const privateKey = this.s3Configuration.AWS_CLOUDFRONT_PRIVATE_KEY;
      const keyPairId = this.s3Configuration.AWS_CLOUDFRONT_KEY_PAIR_ID;
      const dateLessThan = new Date();
      dateLessThan.setMinutes(dateLessThan.getMinutes() + 20);

      const signedUrl = await getSignedUrl({
        url: `${this.cloudFrontURL}/${key}`,
        keyPairId,
        privateKey,
        dateLessThan: dateLessThan.toString(),
      });

      return {
        signedUrl,
        type: ContentType,
      };
    } catch (error) {
      if (error.name === "NoSuchKey") {
        throw new BadRequestException("This key does not exist!");
      }
    }
  }

  async deleteFile(key: string) {
    const command = new DeleteObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });

    await this.s3Client.send(command);

    return {
      message: "File has been successfully deleted!",
    };
  }
}
