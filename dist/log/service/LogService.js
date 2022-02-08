"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogService = void 0;
const common_1 = require("@nestjs/common");
const log_1 = require("../log");
/** */
let LogService = class LogService {
    /** */
    constructor(log) {
        this.log = log;
    }
    /** */
    trace(msg, tag, data) {
        this.log.trace(msg, tag, data);
    }
    /** */
    debug(msg, tag, data) {
        this.log.debug(msg, tag, data);
    }
    /** */
    info(msg, tag, data) {
        this.log.info(msg, tag, data);
    }
    /** */
    error(msg, tag, error, data) {
        this.log.error(msg, tag, error, data);
    }
};
LogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [log_1.Log])
], LogService);
exports.LogService = LogService;
