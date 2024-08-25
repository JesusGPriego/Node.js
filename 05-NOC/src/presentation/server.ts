import { CheckService } from "@/domain/use-cases/checks/check-service";
import { CronService } from "@/presentation/cron/cron-service";

function createCronTimeSeconds(seconds: number): string {
  return `*/${seconds} * * * * *`;
}

function onTick(callback: Function): () => void {
  return function () {
    callback();
  };
}

function checkService(url: string = "http://localhost:3000/posts") {
  new CheckService().execute(url);
}

export class Server {
  public static start() {
    console.log("Serer started");
    CronService.createJob(createCronTimeSeconds(5), onTick(checkService));
  }
}
