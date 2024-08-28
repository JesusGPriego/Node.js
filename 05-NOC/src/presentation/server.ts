import { CheckService } from '@/domain/use-cases/checks/check-service';
import { FileSystemDataSource } from '@/infra/datasources/file-system.datasource';
import { LogRepositoryImpl } from '@/infra/repositories/log-impl.repository';
import { CronService } from '@/presentation/cron/cron.service';
import { EmailService } from './email/email.service';
import { envs } from '@/config/env';
import { SendEmailLogs } from '@/domain/use-cases/email/send-email-log';

const defaultURL = 'google.com';
const fileSystemRepository = new LogRepositoryImpl(new FileSystemDataSource());

const emailService = new EmailService();

function onTick(callback: Function): () => void {
  return function () {
    callback();
  };
}

function checkService(url: string = defaultURL): void {
  new CheckService(
    () => console.log('success'),
    (error: string) => console.log(error),
    fileSystemRepository
  ).execute(url);
}

export class Server {
  public static start() {
    console.log('Server started');
    // // CronService.createJob(CronService.createCronTimeSeconds(5), onTick(checkService));
    // new SendEmailLogs(emailService, fileSystemRepository).execute([
    //   envs.RECEIVER_EMAIL,
    // ]);
  }
}
