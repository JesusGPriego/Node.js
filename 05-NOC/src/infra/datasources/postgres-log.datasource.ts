import { LogDataSource } from '@/domain/datasources/log.datasource';
import { Log, LogSeverityLevel } from '@/domain/entities/log.entity';
import { PrismaClient, SeverityLevel } from '@prisma/client';
import { postgresLogToLogMapper } from '../mappers/postgresLogToLogMapper';

export class PostgresLogDatasource implements LogDataSource {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  private getSeverityLevel(log: Log): SeverityLevel {
    const logLevel = log.level.toUpperCase() as SeverityLevel;
    return logLevel;
  }

  async saveLog(log: Log): Promise<void> {
    const newLog = await this.prisma.logModel.create({
      data: {
        message: log.message,
        createdAt: log.createdAt,
        origin: log.origin,
        level: this.getSeverityLevel(log),
      },
    });
    console.log('created new log: ', newLog);
  }
  async getLogs(): Promise<Log[]> {
    const logs = await this.prisma.logModel.findMany();
    return logs.map(postgresLogToLogMapper);
  }
  async getLogsBySeverityLevel(
    severityLevel: LogSeverityLevel
  ): Promise<Log[]> {
    const logs = await this.prisma.logModel.findMany({
      where: {
        level: severityLevel.toUpperCase() as SeverityLevel,
      },
    });
    return logs.map(postgresLogToLogMapper);
  }
}
