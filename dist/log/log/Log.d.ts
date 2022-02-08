/** */
export declare type LogData = {
    [key: string]: any;
};
/** */
export declare abstract class Log {
    /** */
    protected now(): string;
    /** */
    protected dataToStr(data: LogData): string;
    /** */
    abstract trace(msg: string, tag?: string, data?: LogData): void;
    /** */
    abstract debug(msg: string, tag?: string, data?: LogData): void;
    /** */
    abstract info(msg: string, tag?: string, data?: LogData): void;
    /** */
    abstract error(msg: string, tag?: string, error?: any, data?: LogData): void;
}
