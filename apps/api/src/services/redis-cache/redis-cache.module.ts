import { createKeyv } from "@keyv/redis";
import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigType } from "@nestjs/config";
import { RedisClientOptions } from "redis";

import redisConfig from "src/config/redis.config";
import { RedisCacheService } from "./redis-cache.service";

@Module({
  imports: [
    CacheModule.registerAsync<RedisClientOptions>({
      inject: [redisConfig.KEY],
      imports: [ConfigModule.forFeature(redisConfig)],
      useFactory: (redisConfiguration: ConfigType<typeof redisConfig>) => {
        const url = new URL("redis://");
        url.host = redisConfiguration.REDIS_HOST;
        url.port = redisConfiguration.REDIS_PORT;
        url.password = redisConfiguration.REDIS_PASSWORD;

        return {
          stores: [createKeyv(url.toString())],
        };
      },
    }),
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService, CacheModule],
})
export class RedisCacheModule {}
