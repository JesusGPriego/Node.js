import { Server } from '@/presentation/server';
import { envs } from '@/config/env';
import { MongoDatabase } from '@/data/mongo/init';
import { LogModel } from '@/data/mongo/models/log.model';

(() => {
  main();
})();

async function main() {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });
  Server.start();
}

async function main2() {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });
}
