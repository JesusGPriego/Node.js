import { MongoLog } from '@/data/mongo/models/log.mongo';
import { Log, LogSeverityLevel } from '@/domain/entities/log.entity';

export function mongoLogToLogMapper(mongoLog: MongoLog): Log {
  const { createdAt, level, message, origin } = mongoLog;
  const log = new Log({
    createdAt: new Date(createdAt),
    level,
    message,
    origin,
  });
  return log;
}
