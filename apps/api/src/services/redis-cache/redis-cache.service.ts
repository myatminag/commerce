import { Cache, CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { AppConfig } from "src/config/type";

@Injectable()
export class RedisCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private configService: ConfigService<AppConfig>,
  ) {}

  async get(key: string): Promise<string> {
    return this.cacheManager.get(key);
  }

  async remove(key: string) {
    return this.cacheManager.del(key);
  }

  async clear() {
    return this.cacheManager.clear();
  }

  async set(key: string, value: string, ttl?: number) {
    return this.cacheManager.set(
      key,
      value,
      ttl ?? this.configService.get("REDIS_TTL"),
    );
  }
}
