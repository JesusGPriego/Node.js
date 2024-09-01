import { Log } from '@/domain/entities/log.entity';

export function stringToLogMapper(logAsString: string): Log {
  const logData: Log = JSON.parse(logAsString);
  const log = new Log(logData);
  return log;
}
