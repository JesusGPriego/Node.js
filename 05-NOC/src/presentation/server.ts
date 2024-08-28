import { envs } from '@/config/env';
import { EmailPlugin } from '@/config/mailer/mailer.plugin';
import { CheckService } from '@/domain/use-cases/checks/check-service';
import { EmailService } from '@/domain/use-cases/email/email-service';
import { FileSystemDataSource } from '@/infra/datasources/file-system.datasource';
import { LogRepositoryImpl } from '@/infra/repositories/log-impl.repository';
import { CronService } from '@/presentation/cron/cron.service';
const defaultURL = 'google.com';
const fileSystemRepository = new LogRepositoryImpl(new FileSystemDataSource());

const emailPlugin = new EmailPlugin({
  service: envs.MAILER_SERVICE,
  auth: {
    user: envs.MAILER_EMAIL,
    pass: envs.MAILER_SECRET_KEY,
  },
});

const emailService = new EmailService(emailPlugin, fileSystemRepository);

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
    emailService.execute(envs.RECEIVER_EMAIL);
  }
}
