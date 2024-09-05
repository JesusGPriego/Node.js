import { MongoDatabase } from '@/data/mongo/init';
import { mongoConnectionOptions } from '../__fixtures__/mongoConnectionArgs';
import mongoose from 'mongoose';
import { LogModel } from '@/data/mongo/models/log.model';

describe('mongo log model', () => {
  beforeAll(async () => {
    await MongoDatabase.connect(mongoConnectionOptions);
  });
  afterAll(() => {
    mongoose.connection.close();
  });
  test('should return log model', async () => {
    const logData = {
      origin: 'log.model.test.ts',
      message: 'test message',
      level: 'low',
    };
    const log = await LogModel.create(logData);
    expect(log).toEqual(
      expect.objectContaining({
        ...logData,
        createdAt: expect.any(Date),
        id: expect.any(String),
      })
    );
  });
  test('should return the schema object', () => {
    const schema = LogModel.schema.obj;
    expect(schema).toEqual(
      expect.objectContaining({
        message: { type: expect.any(Function), required: true },
        origin: { type: expect.any(Function) },
        level: {
          type: expect.any(Function),
          enum: ['low', 'medium', 'high'],
          default: 'low',
        },
        createdAt: expect.any(Object),
      })
    );
  });
});
