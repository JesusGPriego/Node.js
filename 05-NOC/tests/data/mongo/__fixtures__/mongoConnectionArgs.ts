import { envs } from '@/config/env';

export const mongoConnectionOptions = {
  dbName: envs.MONGO_DB_NAME,
  mongoUrl: envs.MONGO_URL,
};
