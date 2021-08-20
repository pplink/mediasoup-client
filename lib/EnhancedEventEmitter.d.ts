/// <reference types="node" />
import { EventEmitter } from 'events';
import { Logger } from './Logger';
declare const logger: Logger;
export { logger as enhancedEventEmitterLogger };
export declare class EnhancedEventEmitter extends EventEmitter {
    constructor();
    safeEmit(event: string, ...args: any[]): boolean;
    safeEmitAsPromise(event: string, ...args: any[]): Promise<any>;
}
//# sourceMappingURL=EnhancedEventEmitter.d.ts.map