import { Server } from '@/presentation/server';
import { envs } from '@/config/env';
import { MongoDatabase } from '@/data/mongo/init';
import { PrismaClient } from '@prisma/client';

(() => {
  main();
})();

async function main() {
  // await MongoDatabase.connect({
  //   mongoUrl: envs.MONGO_URL,
  //   dbName: envs.MONGO_DB_NAME,
  // });
  Server.start();
}

async function main2() {
  // const prisma = new PrismaClient();
  // const logs = await prisma.logModel.findMany();
  // console.log(logs);
}
