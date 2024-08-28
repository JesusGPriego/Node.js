import { Log, LogSeverityLevel } from '@/domain/entities/log.entity';
import { LogRepository } from '@/domain/repository/log.repository';
import { EmailService } from '@/presentation/email/email.service';

interface SendLogEmailUseCase {
  execute: (to: string | string[]) => Promise<boolean>;
}

export class SendEmailLogs implements SendLogEmailUseCase {
  constructor(
    private readonly emailService: EmailService,
    private readonly logRepository: LogRepository
  ) {}
  async execute(to: string | string[]) {
    const sent = await this.emailService.sendEmailWithFileSystemLogs(to);
    if (!sent) {
      this.saveLog(false);
      return false;
    }
    this.saveLog(true);
    return true;
  }
  private saveLog(error: boolean) {
    this.logRepository.saveLog(
      new Log({
        message: error ? 'Email could not be sent' : 'Email sent',
        level: error ? LogSeverityLevel.high : LogSeverityLevel.low,
        origin: 'send-email-log.ts',
      })
    );
  }
}
