"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const debug_1 = __importDefault(require("debug"));
const APP_NAME = 'mediasoup-client';
class Logger {
    constructor(prefix) {
        if (prefix) {
            this._debug = debug_1.default(`${APP_NAME}:${prefix}`);
            this._warn = debug_1.default(`${APP_NAME}:WARN:${prefix}`);
            this._error = debug_1.default(`${APP_NAME}:ERROR:${prefix}`);
        }
        else {
            this._debug = debug_1.default(APP_NAME);
            this._warn = debug_1.default(`${APP_NAME}:WARN`);
            this._error = debug_1.default(`${APP_NAME}:ERROR`);
        }
    }
    get debug() {
        return this._debug;
    }
    get warn() {
        return this._warn;
    }
    get error() {
        return this._error;
    }
    setExternalLogger(input, prefix) {
        /**
         * not export debug log
         */
        // this._debug = (formatter: any, ...args: any[]) => 
        // {
        // 	input.log(`${prefix}:${JSON.stringify(formatter)}`, ...args);
        // };
        this._warn = (formatter, ...args) => {
            input.warn(`${prefix}:${JSON.stringify(formatter)}`, ...args);
        };
        this._error = (formatter, ...args) => {
            input.error(`${prefix}:${JSON.stringify(formatter)}`, ...args);
        };
    }
}
exports.Logger = Logger;
