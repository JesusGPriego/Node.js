import { envs } from '@/config/env';
import { LogRepository } from '@/domain/repository/log.repository';
import { createTransport } from 'nodemailer';

type Attachment = {
  file: string;
  path: string;
};

type SendMailOptions = {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
};

export class EmailService {
  private transporter = createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { htmlBody, subject, to, attachments = [] } = options;
    try {
      const sentInformation = await this.transporter.sendMail({
        to,
        subject,
        html: htmlBody,
        attachments,
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  sendEmailWithFileSystemLogs(to: string | string[]) {
    const subject = 'Logs del servidor';
    const htmlBody = `
      <h3>Logs de sistema - NOC</h3>
      <p>lorem impsun</p>
      `;
    const attachments: Attachment[] = [
      { file: 'logs-all.log', path: './logs/logs-all.log' },
    ];
    return this.sendEmail({ to, subject, attachments, htmlBody });
  }
}
