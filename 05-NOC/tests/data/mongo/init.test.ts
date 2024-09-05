import { MongoDatabase } from '@/data/mongo/init';
import mongoose from 'mongoose';
import { mongoConnectionOptions } from './__fixtures__/mongoConnectionArgs';

describe('init Mongo', () => {
  afterAll(() => {
    mongoose.connection.close();
  });
  test('Should connect to MongoDB', async () => {
    const isConnected = await MongoDatabase.connect(mongoConnectionOptions);
    expect(isConnected).toBeTruthy();
  });
  test('should throw an exception', async () => {
    const isConnected = await MongoDatabase.connect({
      ...mongoConnectionOptions,
      mongoUrl: 'asdfasf',
    });
    expect(isConnected).toBeFalsy();
  });
});
