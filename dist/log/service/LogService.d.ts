import { Log, LogData } from '../log';
/** */
export declare class LogService {
    private readonly log;
    /** */
    constructor(log: Log);
    /** */
    trace(msg: string, tag?: string, data?: LogData): void;
    /** */
    debug(msg: string, tag?: string, data?: LogData): void;
    /** */
    info(msg: string, tag?: string, data?: LogData): void;
    /** */
    error(msg: string, tag?: string, error?: any, data?: LogData): void;
}
