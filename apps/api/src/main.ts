import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import * as expressBasicAuth from "express-basic-auth";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppConfig } from "./config/type";
import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<AppConfig, true>);

  app.enableCors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:3001"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });

  app.enableVersioning({ defaultVersion: "1", type: VersioningType.URI });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // swagger docs username and password
  app.use(
    "/api/*",
    expressBasicAuth({ challenge: true, users: { atx: "atx@123!@#" } }),
  );

  // swagger docs
  const config = new DocumentBuilder()
    .setTitle("ATX Ecommerce Api")
    .setVersion("1.0.0")
    .addSecurityRequirements("bearer")
    .addBearerAuth({ type: "http", scheme: "bearer", bearerFormat: "JWT" })
    .build();

  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  const port = configService.get("PORT");
  await app.listen(port);
}

bootstrap();
