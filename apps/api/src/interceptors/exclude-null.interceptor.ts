import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class ExcludeNullValueInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(map((value) => this.recursivelyStripNullValues(value)));
  }

  private recursivelyStripNullValues(value: unknown): unknown {
    if (Array.isArray(value)) {
      return value.map((data) => this.recursivelyStripNullValues(data));
    }

    if (value instanceof Date) {
      return value;
    }

    if (value !== null && typeof value === "object") {
      return Object.fromEntries(
        Object.entries(value)
          .filter(([, val]) => val !== null)
          .map(([key, val]) => [key, this.recursivelyStripNullValues(val)]),
      );
    }

    return value;
  }
}
