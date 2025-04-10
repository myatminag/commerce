import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { SettingService } from "./setting.service";
import settingsConfig from "src/config/settings.config";
import { SettingController } from "./setting.controller";

@Module({
  imports: [ConfigModule.forFeature(settingsConfig)],
  providers: [SettingService],
  controllers: [SettingController],
})
export class SettingModule {}
