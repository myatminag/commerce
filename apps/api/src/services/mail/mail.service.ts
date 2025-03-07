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

  @OnEvent(UserEvent.FORGOT_PASSWORD)
  async forgotPassword(dto: ForgotPasswordMail) {
    return;
    await this.mailerService.sendMail({
      to: dto.email,
      subject: "Forgot Password",
      template: "./forgot-password-mail",
      context: {
        name: dto.name,
      },
    });
  }
}
