import { Server } from '@/presentation/server';
import { envs } from '@/config/env';
import { MongoDatabase } from '@/data/mongo/init';

(() => {
  main2();
})();

function main() {
  Server.start();
}

async function main2() {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });
}
