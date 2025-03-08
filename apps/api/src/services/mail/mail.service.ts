import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";

import { UserEvent } from "../auth/events/user.event";
import { ForgotPasswordMail } from "./interfaces/fogot-password-mail.interface";
import { WelcomeMail } from "./interfaces/welcome-mail.interfaces";

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  @OnEvent(UserEvent.REGISTERED)
  async registration(dto: WelcomeMail) {
    //TODO: Later, it needs to add actual link for get started.
    await this.mailerService.sendMail({
      to: dto.email,
      subject: "Welcome Email",
      template: "./welcome-mail",
      context: {
        name: dto.name,
        link: "https://example.com/",
      },
    });
  }

  @OnEvent(UserEvent.FORGOT_PASSWORD)
  async forgotPassword(dto: ForgotPasswordMail) {
    //TODO: Later, it needs to add actual link for get started.
    await this.mailerService.sendMail({
      to: dto.email,
      subject: "Forgot Password",
      template: "./password-reset",
      context: {
        name: dto.name,
        email: dto.email,
        link: "https://example.com/",
      },
    });
  }
}
