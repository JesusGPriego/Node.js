import { LogModel } from '@/data/mongo/models/log.model';
import { MongoLog } from '@/data/mongo/models/log.mongo';
import { LogDataSource } from '@/domain/datasources/log.datasource';
import { Log, LogSeverityLevel } from '@/domain/entities/log.entity';
import { mongoLogToLogMapper } from '@/infra/mappers/mongoLogToLogMapper';

export class MongoLogDatasource implements LogDataSource {
  async saveLog(log: Log): Promise<void> {
    const newLog = await LogModel.create(log);
    console.log('Mongo log created', newLog);
  }
  async getLogs(): Promise<Log[]> {
    const logs: MongoLog[] = await LogModel.find();
    return logs.map(mongoLogToLogMapper);
  }
  async getLogsBySeverityLevel(
    severityLevel: LogSeverityLevel
  ): Promise<Log[]> {
    const logs: MongoLog[] = await LogModel.find({
      level: severityLevel,
    });
    return logs.map(mongoLogToLogMapper);
  }
}
