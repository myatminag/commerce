import { MailerModule } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService, ConfigType } from "@nestjs/config";

import mailConfig from "src/config/mail.config";
import { MailService } from "./mail.service";

@Module({
  imports: [
    ConfigModule.forFeature(mailConfig),
    MailerModule.forRootAsync({
      useFactory: (mailConfiguration: ConfigType<typeof mailConfig>) => ({
        transport: {
          host: mailConfiguration.HOST,
          port: mailConfiguration.PORT,
          secure: mailConfiguration.SECURE,
          auth: {
            user: mailConfiguration.USER,
            pass: mailConfiguration.PASSWORD,
          },
        },
        defaults: {
          from: `"ATX" ${mailConfiguration.FROM}`,
        },
        template: {
          dir: process.cwd() + "/templates",
          adapter: new EjsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
