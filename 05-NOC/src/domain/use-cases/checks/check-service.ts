import { Log, LogSeverityLevel } from '@/domain/entities/log.entity';
import { LogRepository } from '@/domain/repository/log.repository';

interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type SuccssCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase {
  constructor(
    private readonly successCallback: SuccssCallback,
    private readonly errorCallback: ErrorCallback,
    private readonly logRepository: LogRepository
  ) {}

  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`Error on check ${url}`);
      }
      const log = new Log(`Service ${url} is working`, LogSeverityLevel.low);
      this.logRepository.saveLog(log);
      this.successCallback();
      return true;
    } catch (error) {
      const errorMessage = `${error}`;
      const log = new Log(errorMessage, LogSeverityLevel.high);
      this.logRepository.saveLog(log);
      this.errorCallback(`${error}`);
      return false;
    }
  }
}
