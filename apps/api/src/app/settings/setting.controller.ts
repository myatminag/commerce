import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { SettingService } from "./setting.service";
import { CreateSettingsDto } from "./dto/create-settings.dto";
import { CreateDeliveryDto } from "./dto/create-delivery.dto";
import { UpdateDeliveryDto } from "./dto/update-delivery.dto";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { IsPublic } from "src/services/auth/decorators/is-public.decorator";

@IsPublic()
@ApiTags("setting")
@Controller("setting")
export class SettingController {
  constructor(private settingService: SettingService) {}

  @Post()
  async saveSystemConfig(@Body() dto: CreateSettingsDto) {
    return this.settingService.saveSystemConfig(dto);
  }

  @Get()
  async getSetting() {
    return this.settingService.getSetting();
  }

  @Post("delivery")
  async createDelivery(@Body() dto: CreateDeliveryDto) {
    return this.settingService.createDelivery(dto);
  }

  @Post("location")
  async createLocation(@Body() dto: CreateLocationDto) {
    return this.settingService.createLocation(dto);
  }

  @Get("delivery/:id")
  async findDelivery(@Param("id") id: string) {
    return this.settingService.findDelivery(id);
  }

  @Get("location/:id")
  async findLocation(@Param("id") id: string) {
    return this.settingService.findLocation(id);
  }

  @Put("delivery/:id")
  @HttpCode(HttpStatus.OK)
  async updateDelivery(
    @Param("id") id: string,
    @Body() dto: UpdateDeliveryDto,
  ) {
    return this.settingService.updateDelivery(id, dto);
  }

  @Delete("delivery/:id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteDelivery(@Param("id") id: string) {
    return this.settingService.deleteDelivery(id);
  }

  @Put("location/:id")
  @HttpCode(HttpStatus.OK)
  async updateLocation(
    @Param("id") id: string,
    @Body() dto: UpdateLocationDto,
  ) {
    return this.settingService.updateLocation(id, dto);
  }

  @Delete("location/:id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteLocation(@Param("id") id: string) {
    return this.settingService.deleteLocation(id);
  }
}
