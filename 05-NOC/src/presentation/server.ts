import { CheckService } from "@/domain/use-cases/checks/check-service";
import { CronService } from "@/presentation/cron/cron-service";

const defaultURL = "https://google.com";

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
    (error: string) => console.log(error)
  ).execute(url);
}

export class Server {
  public static start() {
    console.log("Serer started");
    CronService.createJob(createCronTimeSeconds(5), onTick(checkService));
  }
}
