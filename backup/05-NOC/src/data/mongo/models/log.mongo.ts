import { LogSeverityLevel } from '@/domain/entities/log.entity';

export type MongoLog = {
  _id: ID;
  message: string;
  origin: string;
  level: LogSeverityLevel;
  createdAt: string;
  __v: number;
};

type ID = {
  $oid: string;
};
