import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1b07f76f34add8",
    pass: "9ecbd2e097ad18",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Manfrinne Ferreira <m4nf@email.com>",
      to: "Esquipe de desenvolvimento Feedget <dev@feedget.com>",
      subject,
      html: body,
    });
  }
}
