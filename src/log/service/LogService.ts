import { Injectable } from '@nestjs/common';
import { Log, LogData } from '../log';

/** */
@Injectable()
export class LogService {
  /** */
  constructor(private readonly log: Log) {
  }

  /** */
  trace(msg: string, tag?: string, data?: LogData): void {
    this.log.trace(msg, tag, data);
  }

  /** */
  debug(msg: string, tag?: string, data?: LogData): void {
    this.log.debug(msg, tag, data);
  }

  /** */
  info(msg: string, tag?: string, data?: LogData): void {
    this.log.info(msg, tag, data);
  }

  /** */
  error(msg: string, tag?: string, error?: any, data?: LogData): void {
    this.log.error(msg, tag, error, data);
  }
}