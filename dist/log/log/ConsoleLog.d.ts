import { Log, LogData } from './Log';
/** */
export declare class ConsoleLog extends Log {
    /** */
    private log;
    /** */
    trace(msg: string, tag?: string, data?: LogData): void;
    /** */
    debug(msg: string, tag?: string, data?: LogData): void;
    /** */
    info(msg: string, tag?: string, data?: LogData): void;
    /** */
    error(msg: string, tag?: string, error?: any, data?: LogData): void;
}
