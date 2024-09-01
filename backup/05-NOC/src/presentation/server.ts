import { envs } from '@/config/env';
import { EmailPlugin } from '@/config/mailer/mailer.plugin';
import { CheckService } from '@/domain/use-cases/checks/check-service';
import { EmailService } from '@/domain/use-cases/email/email-service';
import { FileSystemDataSource } from '@/infra/datasources/file-system.datasource';
import { MongoLogDatasource } from '@/infra/datasources/mongo-log.datasource';
import { LogRepositoryImpl } from '@/infra/repositories/log-impl.repository';
import { CronService } from '@/presentation/cron/cron.service';
const defaultURL = 'https://www.google.com/';

const logRepository = new LogRepositoryImpl(new MongoLogDatasource());

const emailPlugin = new EmailPlugin({
  service: envs.MAILER_SERVICE,
  auth: {
    user: envs.MAILER_EMAIL,
    pass: envs.MAILER_SECRET_KEY,
  },
});

const emailService = new EmailService(emailPlugin, logRepository);

function onTick(callback: Function): () => void {
  return function () {
    callback();
  };
}

function checkService(url: string = defaultURL): void {
  new CheckService(
    () => console.log('success'),
    (error: string) => console.log(error),
    logRepository
  ).execute(url);
}

async function getLogs() {
  const logs = await logRepository.getLogs();
  console.log(logs);
}

export class Server {
  public static start() {
    console.log('Server started');
    getLogs();
    // CronService.createJob(
    //   CronService.createCronTimeSeconds(5),
    //   onTick(checkService)
    // );
    // new SendEmailLogs(emailService, fileSystemRepository).execute([
    //   envs.RECEIVER_EMAIL,
    // ]);
    // emailService.execute(envs.RECEIVER_EMAIL);
  }
}
