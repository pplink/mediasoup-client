import debug from 'debug';
import type { Loggable } from '@pplink/logger';

const APP_NAME = 'mediasoup-client';

export class Logger 
{
	private _debug: (formatter: any, ...args: any[]) => void;
	private _warn: (formatter: any, ...args: any[]) => void;
	private _error: (formatter: any, ...args: any[]) => void;

	constructor(prefix?: string) 
	{
		if (prefix) 
		{
			this._debug = debug(`${APP_NAME}:${prefix}`);
			this._warn = debug(`${APP_NAME}:WARN:${prefix}`);
			this._error = debug(`${APP_NAME}:ERROR:${prefix}`);
		}
		else 
		{
			this._debug = debug(APP_NAME);
			this._warn = debug(`${APP_NAME}:WARN`);
			this._error = debug(`${APP_NAME}:ERROR`);
		}
	}

	get debug(): (formatter: any, ...args: any[]) => void 
	{
		return this._debug;
	}
	get warn(): (formatter: any, ...args: any[]) => void 
	{
		return this._warn;
	}
	get error(): (formatter: any, ...args: any[]) => void 
	{
		return this._error;
	}

	public setExternalLogger(input: Loggable, prefix:string) 
	{
		/**
		 * not export debug log
		 */
		// this._debug = (formatter: any, ...args: any[]) => 
		// {
		// 	input.log(`${prefix}:${JSON.stringify(formatter)}`, ...args);
		// };
		this._warn = (formatter: any, ...args: any[]) => 
		{
			input.warn(`${prefix}:${JSON.stringify(formatter)}`, ...args);
		};
		this._error = (formatter: any, ...args: any[]) => 
		{
			input.error(`${prefix}:${JSON.stringify(formatter)}`, ...args);
		};
	}
}