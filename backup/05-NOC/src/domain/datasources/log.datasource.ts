import { Log, LogSeverityLevel } from '@/domain/entities/log.entity';

export abstract class LogDataSource {
  abstract saveLog(log: Log): Promise<void>;
  abstract getLogs(): Promise<Log[]>;
  abstract getLogsBySeverityLevel(
    severityLevel: LogSeverityLevel
  ): Promise<Log[]>;
}
