import {
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiConsumes, ApiTags } from "@nestjs/swagger";

import { ApiFile } from "src/services/s3/decorators/api-file.decorator";
import { S3Service } from "./s3.service";

export const MAX_FILE_SIZE = 1024 * 1024 * 10; // 10 MB

@ApiTags("files")
@Controller("files")
export class S3Controller {
  constructor(private s3Service: S3Service) {}

  @Post()
  @ApiFile()
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: ".(png|jpeg|jpg)" }),
          new MaxFileSizeValidator({
            maxSize: MAX_FILE_SIZE,
          }),
        ],
        fileIsRequired: true,
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.s3Service.uploadFile({ file });
  }

  @Get(":key")
  async getFile(@Param("key") key: string) {
    return this.s3Service.getFileUrl(key);
  }

  @Delete(":key")
  async deleteFile(@Param("key") key: string) {
    return this.s3Service.deleteFile(key);
  }
}
