import { Module } from '@nestjs/common';
import { BusService } from './service';

/** */
@Module({
  providers: [BusService],
  exports: [BusService],
})
export class BusModule {
}