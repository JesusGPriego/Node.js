import fs from 'fs';

import { LogDataSource } from '@/domain/datasources/log.datasource';
import { Log, LogSeverityLevel } from '@/domain/entities/log.entity';
import { stringToLogMapper } from '@/infra/mappers/stringToLog.mapper';

export class FileSystemDataSource extends LogDataSource {
  private readonly logPath = 'logs/';
  private readonly allLogPath = 'logs/logs-all.log';
  private readonly logSecurityLevels = Object.values(LogSeverityLevel);
  constructor() {
    super();
    this.createLogsFiles();
  }

  private createLogsFiles() {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(this.logPath);
    }
    this.logSecurityLevels.forEach((logSecurityLevel) => {
      const path = this.getLogPathBySeverity(logSecurityLevel);
      if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '');
      }
    });
  }

  private getLogsFromFile(path: string): Log[] {
    const content = fs.readFileSync(path, 'utf-8');
    const logs = content.split('\n');
    return logs.map(stringToLogMapper);
  }

  private getLogPathBySeverity(logSecurityLevel: LogSeverityLevel): string {
    return `logs/logs-${logSecurityLevel}.log`;
  }

  async saveLog(newLog: Log): Promise<void> {
    const logAsString = `${JSON.stringify(newLog)}\n`;
    fs.appendFileSync(this.allLogPath, logAsString);
    fs.appendFileSync(this.getLogPathBySeverity(newLog.level), logAsString);
  }
  async getLogs(): Promise<Log[]> {
    return this.getLogsFromFile(this.allLogPath);
  }
  async getLogsBySeverityLevel(
    severityLevel: LogSeverityLevel
  ): Promise<Log[]> {
    return this.getLogsFromFile(this.getLogPathBySeverity(severityLevel));
  }
}
