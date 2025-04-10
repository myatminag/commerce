import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { ConfigType } from "@nestjs/config";

import settingsConfig from "src/config/settings.config";
import { CreateSettingsDto } from "./dto/create-settings.dto";
import { CreateDeliveryDto } from "./dto/create-delivery.dto";
import { UpdateDeliveryDto } from "./dto/update-delivery.dto";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { PrismaService } from "src/services/prisma/prisma.service";

@Injectable()
export class SettingService {
  private readonly settingId: string;

  constructor(
    @Inject(settingsConfig.KEY)
    private settingsConfiguration: ConfigType<typeof settingsConfig>,
    private prismaService: PrismaService,
  ) {
    this.settingId = this.settingsConfiguration.SETTING_ID;
  }

  async saveSystemConfig(dto: CreateSettingsDto) {
    return this.prismaService.setting.upsert({
      where: { id: this.settingId },
      update: {
        email: dto.email,
        phoneNumber: dto.phoneNumber,
        shoppingHours: dto.shoppingHours,
        shoppingHoursMode: dto.shoppingHoursMode,
        ads: dto.ads,
        banner: dto.banner,
        currency: "mmk",
        socialLinks: dto.socialLinks,
      },
      create: {
        id: this.settingId,
        email: dto.email,
        phoneNumber: dto.phoneNumber,
        shoppingHours: dto.shoppingHours,
        shoppingHoursMode: dto.shoppingHoursMode,
        ads: dto.ads,
        banner: dto.banner,
        currency: "mmk",
        isDeliveryAvailable: dto.isDeliveryAvailable,
        socialLinks: dto.socialLinks,
      },
    });
  }

  async getSetting() {
    const [setting, delivery, location] = await Promise.all([
      this.prismaService.setting.findUnique({
        where: { id: this.settingId },
      }),
      this.prismaService.delivery.findMany(),
      this.prismaService.location.findMany(),
    ]);

    if (!setting) {
      throw new NotFoundException("System config not found!");
    }

    return {
      setting,
      delivery,
      location,
    };
  }

  async createDelivery(dto: CreateDeliveryDto) {
    const delivery = await this.prismaService.delivery.findUnique({
      where: {
        name: dto.name,
      },
    });

    if (delivery) {
      throw new ConflictException("Delivery already exists!");
    }

    return this.prismaService.delivery.create({
      data: {
        duration: dto.duration,
        fee: dto.fee,
        name: dto.name,
      },
    });
  }

  async createLocation(dto: CreateLocationDto) {
    const location = await this.prismaService.location.findUnique({
      where: {
        name: dto.name,
      },
    });

    if (location) {
      throw new ConflictException("Location already exists!");
    }

    return this.prismaService.location.create({
      data: {
        address: dto.address,
        name: dto.name,
        phoneNumber: dto.phoneNumber,
        isPickupAvaiable: dto.isPickupAvaiable,
      },
    });
  }

  async findDelivery(id: string) {
    const delivery = await this.prismaService.delivery.findUnique({
      where: { id },
    });

    if (!delivery) {
      throw new NotFoundException("Delivery not found!");
    }

    return delivery;
  }

  async findLocation(id: string) {
    const location = await this.prismaService.location.findUnique({
      where: { id },
    });

    if (!location) {
      throw new NotFoundException("Location not found!");
    }

    return location;
  }

  async updateDelivery(id: string, dto: UpdateDeliveryDto) {
    const delivery = await this.findDelivery(id);

    return await this.prismaService.delivery.update({
      where: {
        id: delivery.id,
      },
      data: {
        duration: dto.duration,
        fee: dto.fee,
        name: dto.name,
      },
    });
  }

  async updateLocation(id: string, dto: UpdateLocationDto) {
    const location = await this.findLocation(id);

    return await this.prismaService.location.update({
      where: {
        id: location.id,
      },
      data: {
        address: dto.address,
        isPickupAvaiable: dto.isPickupAvaiable,
        name: dto.name,
        phoneNumber: dto.phoneNumber,
      },
    });
  }

  async deleteDelivery(id: string) {
    const delivery = await this.findDelivery(id);

    return await this.prismaService.delivery.delete({
      where: {
        id: delivery.id,
      },
    });
  }

  async deleteLocation(id: string) {
    const location = await this.findLocation(id);

    return await this.prismaService.delivery.delete({
      where: {
        id: location.id,
      },
    });
  }
}
