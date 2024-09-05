import { LogDataSource } from '@/domain/datasources/log.datasource';
import { Log, LogSeverityLevel } from '@/domain/entities/log.entity';

const log = {
  origin: 'log.datasource.test.ts',
  message: 'test-message',
  level: LogSeverityLevel.low,
  createdAt: new Date(),
};

class MockLogDataSource implements LogDataSource {
  async saveLog(log: Log): Promise<void> {
    return;
  }
  async getLogs(): Promise<Log[]> {
    return [log];
  }
  async getLogsBySeverityLevel(
    severityLevel: LogSeverityLevel
  ): Promise<Log[]> {
    return [log];
  }
}

describe('log.datasource', () => {
  const mockLogDataSource = new MockLogDataSource();
  test('should implement saveLog, getLogs and getLogBySecurityLevel methods', () => {
    expect(typeof mockLogDataSource.saveLog).toBe('function');
    expect(typeof mockLogDataSource.getLogs).toBe('function');
    expect(typeof mockLogDataSource.getLogsBySeverityLevel).toBe('function');
  });
});
