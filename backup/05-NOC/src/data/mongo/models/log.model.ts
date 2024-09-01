import { LogSeverityLevel } from '@/domain/entities/log.entity';
import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
  },
  level: {
    type: String,
    enum: Object.values(LogSeverityLevel),
    default: LogSeverityLevel.low,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const LogModel = mongoose.model('Log', logSchema);
