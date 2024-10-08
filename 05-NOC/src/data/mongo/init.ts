import mongoose from 'mongoose';

type ConnectionOptions = {
  mongoUrl: string;
  dbName: string;
};

export class MongoDatabase {
  static async connect(connectionOptions: ConnectionOptions) {
    const { dbName, mongoUrl } = connectionOptions;
    try {
      await mongoose.connect(mongoUrl, {
        dbName,
      });
      console.log('connection stablished');
    } catch (error) {
      console.log(error);
    }
  }
}
