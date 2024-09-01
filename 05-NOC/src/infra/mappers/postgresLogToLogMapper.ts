import { Log, LogSeverityLevel } from '@/domain/entities/log.entity';
import { LogModel } from '@prisma/client';

export function postgresLogToLogMapper(postgreLog: LogModel): Log {
  const log = new Log({
    level: postgreLog.level.toLowerCase() as LogSeverityLevel,
    message: postgreLog.message,
    origin: postgreLog.origin,
    createdAt: postgreLog.createdAt,
  });
  return log;
}
