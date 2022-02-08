import * as colors from 'ansi-colors';
import { Log, LogData } from './Log';

/** */
const TAG_WIDTH = 18;

/** */
export class ConsoleLog extends Log {
  /** */
  private log(msg: string, level: string, tag?: string, data?: LogData): void {
    let tagStr = tag || '';
    while (tagStr.length < TAG_WIDTH) {
      tagStr += ' ';
    }
    const dataStr = data ? `\n${colors.gray(this.dataToStr(data))}` : '';
    console.log(`${level} | ${this.now()} | ${tagStr} | ${msg}${dataStr}`);
  }

  /** */
  trace(msg: string, tag?: string, data?: LogData): void {
    this.log(msg, 'TRCE', tag, data);
  }

  /** */
  debug(msg: string, tag?: string, data?: LogData): void {
    this.log(msg, 'DEBG', tag, data);
  }
  
  /** */
  info(msg: string, tag?: string, data?: LogData): void {
    this.log(msg, 'INFO', tag, data);
  }

  /** */  
  error(msg: string, tag?: string, error?: any, data?: LogData): void {
  // error message
    let errorMsg = '';
    if (error instanceof Error) {
      errorMsg = ` (${error.message})`;
    }

  // log
    this.log(`${colors.red(msg + errorMsg)}`, 'EROR', tag, data);

  // stack
    if (error instanceof Error) {
      if (error.stack) {
        console.log(colors.gray(error.stack));
      }
    }
  }
}