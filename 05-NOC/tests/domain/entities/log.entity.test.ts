import { Log, LogSeverityLevel } from '@/domain/entities/log.entity';

describe('log entity', () => {
  test('should have log properties after calling new Log()', () => {
    const log = new Log({
      level: LogSeverityLevel.low,
      message: 'test-message',
      origin: 'log.entity.test.ts',
    });
    expect(log).toHaveProperty('createdAt');
    expect(log).toHaveProperty('level');
    expect(log).toHaveProperty('message');
    expect(log).toHaveProperty('origin');
    expect(log).toBeInstanceOf(Log);
  });
});
