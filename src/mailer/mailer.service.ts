import { Injectable } from '@nestjs/common';
import * as aws from '@aws-sdk/client-ses';
import * as nodemailer from 'nodemailer';
import { Email } from './dtos/email';
import { render } from '@react-email/render';
import { WelcomeUserEmail } from '../users/emails/welcome';

@Injectable()
export class MailerService {
  ses: aws.SES;
  transporter: nodemailer.Transporter;

  constructor() {
    this.ses = new aws.SES({
      credentials: {
        accessKeyId: '',
        secretAccessKey: '',
      },
      apiVersion: '2010-12-01',
      region: 'us-east-1',
    });
    this.transporter = nodemailer.createTransport({
      SES: { ses: this.ses, aws },
    });
    this.sendEmail();
  }

  async sendEmail() {
    await this.transporter.sendMail({
      to: 'camilosalazar94@gmail.com',
      from: 'dailygoalscs@gmail.com',
      subject: 'Daily Goals',
      html: render(WelcomeUserEmail({}), { pretty: true }),
    });
  }
}
