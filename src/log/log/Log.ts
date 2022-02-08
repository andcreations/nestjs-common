import * as YAML from 'yaml';

/** */
export type LogData = { [key: string]: any; };

/** */
export abstract class Log {
  /** */
  protected now(): string {
    return new Date().toISOString();
  }

  /** */
  protected dataToStr(data: LogData): string {
    const lines = YAML.stringify(data).split('\n');
    let yaml = '';
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];
      if (index === lines.length - 1 && line.length === 0) {
        continue;
      }

      if (index) {
        yaml += '\n';
      }
      yaml += '  ' + line;
    }
    return yaml;
  }

  /** */
  abstract trace(msg: string, tag?: string, data?: LogData): void;

  /** */
  abstract debug(msg: string, tag?: string, data?: LogData): void;

  /** */
  abstract info(msg: string, tag?: string, data?: LogData): void;

  /** */
  abstract error(msg: string, tag?: string, error?: any, data?: LogData): void;
}