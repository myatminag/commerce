import { Cache, CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class RedisCacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

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
    return this.cacheManager.set(key, value, ttl ?? 3000);
  }
}
