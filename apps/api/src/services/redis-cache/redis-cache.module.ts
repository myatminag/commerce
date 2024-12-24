import { createKeyv } from "@keyv/redis";
import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { RedisClientOptions } from "redis";

import { AppConfig } from "src/config/type";
import { RedisCacheService } from "./redis-cache.service";

@Module({
  imports: [
    CacheModule.registerAsync<RedisClientOptions>({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService<AppConfig>) => {
        const url = new URL("redis://");
        url.host = configService.get("REDIS_HOST");
        url.port = configService.get("REDIS_PORT");
        url.password = configService.get("REDIS_PASSWORD");

        return {
          stores: [createKeyv(url.toString())],
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService, CacheModule],
})
export class RedisCacheModule {}
