import { envs } from '@/config/env';

describe('envs', () => {
  test('should return env options', () => {
    expect(envs).toStrictEqual({
      PORT: 3000,
      MAILER_SERVICE: 'gmail',
      MAILER_EMAIL: 'email@email.com',
      MAILER_SECRET_KEY: 'trythis',
      RECEIVER_EMAIL: 'email2@gmail.com',
      PROD: false,
      MONGO_URL: 'mongodb://suleware:01315162@localhost:27017',
      MONGO_DB_NAME: 'NOC-TEST',
    });
  });
});
