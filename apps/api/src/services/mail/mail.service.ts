import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";

import { WelcomeMail } from "./interfaces/welcome-mail.interfaces";

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  @OnEvent("user.welcome")
  async welcomeMail(dto: WelcomeMail) {
    console.log("dto", dto);
    return;
    await this.mailerService.sendMail({
      to: dto.email,
      subject: "Welcome Email",
      template: "./welcome-mail",
      context: {
        name: dto.name,
      },
    });
  }
}
