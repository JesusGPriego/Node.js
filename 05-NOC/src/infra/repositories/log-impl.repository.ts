import { LogDataSource } from '@/domain/datasources/log.datasource';
import { Log, LogSeverityLevel } from '@/domain/entities/log.entity';
import { LogRepository } from '@/domain/repository/log.repository';

export class LogRepositoryImpl extends LogRepository {
  constructor(private readonly logDatasource: LogDataSource) {
    super();
  }

  async saveLog(log: Log): Promise<void> {
    this.logDatasource.saveLog(log);
  }
  async getLogs(): Promise<Log[]> {
    return this.logDatasource.getLogs();
  }
  async getLogsBySeverityLevel(
    severityLevel: LogSeverityLevel
  ): Promise<Log[]> {
    return this.logDatasource.getLogsBySeverityLevel(severityLevel);
  }
}
