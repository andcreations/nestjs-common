"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLog = void 0;
const colors = require("ansi-colors");
const Log_1 = require("./Log");
/** */
const TAG_WIDTH = 18;
/** */
class ConsoleLog extends Log_1.Log {
    /** */
    log(msg, level, tag, data) {
        let tagStr = tag || '';
        while (tagStr.length < TAG_WIDTH) {
            tagStr += ' ';
        }
        const dataStr = data ? `\n${colors.gray(this.dataToStr(data))}` : '';
        console.log(`${level} | ${this.now()} | ${tagStr} | ${msg}${dataStr}`);
    }
    /** */
    trace(msg, tag, data) {
        this.log(msg, 'TRCE', tag, data);
    }
    /** */
    debug(msg, tag, data) {
        this.log(msg, 'DEBG', tag, data);
    }
    /** */
    info(msg, tag, data) {
        this.log(msg, 'INFO', tag, data);
    }
    /** */
    error(msg, tag, error, data) {
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
exports.ConsoleLog = ConsoleLog;
