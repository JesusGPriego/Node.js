export enum LogSeverityLevel {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export type LogAttrs = {
  level: LogSeverityLevel;
  message: string;
  createdAt?: Date;
  origin: string;
};

export class Log {
  public level: LogSeverityLevel;
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(options: LogAttrs) {
    const { createdAt = new Date(), level, message, origin } = options;
    this.message = message;
    this.level = level;
    this.createdAt = createdAt,
    this.origin = origin;
  }
}
