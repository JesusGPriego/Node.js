import { CheckService } from "@/domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "@/infra/datasources/file-system.datasource";
import { LogRepositoryImpl } from "@/infra/repositories/log-impl.repository";
import { CronService } from "@/presentation/cron/cron-service";

const defaultURL = "http://8080/test";
const fileSystemRepository = new LogRepositoryImpl(
  new FileSystemDataSource()
)

function createCronTimeSeconds(seconds: number): string {
  return `*/${seconds} * * * * *`;
}

function onTick(callback: Function): () => void {
  return function () {
    callback();
  };
}

function checkService(url: string = defaultURL) {
  new CheckService(
    () => console.log("success"),
    (error: string) => console.log(error),
    fileSystemRepository,
  ).execute(url);
}

export class Server {
  public static start() {
    console.log("Server started");
    CronService.createJob(createCronTimeSeconds(5), onTick(checkService));
  }
}
