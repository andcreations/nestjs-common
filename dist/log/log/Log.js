"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const YAML = require("yaml");
/** */
class Log {
    /** */
    now() {
        return new Date().toISOString();
    }
    /** */
    dataToStr(data) {
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
}
exports.Log = Log;
