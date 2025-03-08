import { MailerModule, MailerOptions } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigType } from "@nestjs/config";

import mailConfig from "src/config/mail.config";
import { MailService } from "./mail.service";

@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [mailConfig.KEY],
      imports: [ConfigModule.forFeature(mailConfig)],
      useFactory: (
        mailConfiguration: ConfigType<typeof mailConfig>,
      ): MailerOptions => ({
        transport: {
          host: mailConfiguration.HOST,
          port: mailConfiguration.PORT,
          ignoreTLS: true,
          secure: mailConfiguration.SECURE,
          service: "Gmail",
          auth: {
            user: mailConfiguration.USER,
            pass: mailConfiguration.PASSWORD,
          },
        },
        defaults: {
          from: `"ATX" ${mailConfiguration.FROM}`,
        },
        template: {
          dir: process.cwd() + "/src/services/mail/templates",
          adapter: new EjsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
