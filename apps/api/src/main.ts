import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import expressBasicAuth from "express-basic-auth";

import { AppModule } from "./app/app.module";
import metadata from "./metadata";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:3001"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });

  // validation pipe
  app.useGlobalPipes(new ValidationPipe());

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
    .addGlobalParameters({ name: "tenant-id", in: "header" })
    .addBearerAuth({ type: "http", scheme: "bearer", bearerFormat: "JWT" })
    .build();

  /**
   * using swc builder need to enble type checking
   * https://docs.nestjs.com/openapi/cli-plugin#swc-builder
   */
  await SwaggerModule.loadPluginMetadata(metadata);
  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(8000);
}
bootstrap();
