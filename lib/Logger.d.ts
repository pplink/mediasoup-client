import type { Loggable } from '@pplink/logger';
export declare class Logger {
    private _debug;
    private _warn;
    private _error;
    constructor(prefix?: string);
    get debug(): (formatter: any, ...args: any[]) => void;
    get warn(): (formatter: any, ...args: any[]) => void;
    get error(): (formatter: any, ...args: any[]) => void;
    setExternalLogger(input: Loggable, prefix: string): void;
}
//# sourceMappingURL=Logger.d.ts.map