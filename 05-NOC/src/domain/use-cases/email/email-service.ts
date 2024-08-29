import { Log, LogSeverityLevel } from '@/domain/entities/log.entity';
import { LogRepository } from '@/domain/repository/log.repository';

interface SendLogEmailUseCase {
  execute: (to: string | string[]) => Promise<boolean>;
}

export interface EmailServicePlugin {
  sendEmailWithFileSystemLogs: (to: string | string[]) => Promise<boolean>
}

export class EmailService implements SendLogEmailUseCase {
  constructor(
    private readonly emailPlugin: EmailServicePlugin,
    private readonly logRepository: LogRepository
  ) {}
  async execute(to: string | string[]) {
    const sent = await this.emailPlugin.sendEmailWithFileSystemLogs(to);
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
