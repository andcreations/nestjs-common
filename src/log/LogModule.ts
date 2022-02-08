import { Module } from '@nestjs/common';
import { ConsoleLog } from './log';
import { LogService } from './service';

/** */
function createLogService(): LogService {
  const log = new ConsoleLog();
  return new LogService(log);
}

/** */
@Module({
  providers: [
    {
      provide: LogService,
      useFactory: createLogService,
    }
  ],
  exports: [LogService],
})
export class LogModule {
}