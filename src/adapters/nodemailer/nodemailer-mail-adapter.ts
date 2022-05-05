import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8568e65c9ff59c",
    pass: "2b8c74e2844bb8"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Danilo Augusto <danilo.augmonteiro@gmail.com>',
      subject,
      html: body
    });
  };
}