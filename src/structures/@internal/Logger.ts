import clc, { Chalk } from "chalk"
import { inspect } from "util"

export enum LogPriority {
    /**
     * Does not log anything
     */
    None,

    /**
     * Lows only info
     */
    VeryLow,

    /**
     * Logs only info and errors
     */
    Low,

    /**
     * Logs only info, warnings and errors
     */
    Medium,

    /**
     * Logs info, debug data, warnings, errors.
     */
    High
}

export enum LogType {
    Warn,
    Deprecated,
    Debug,
    Info,
    Error,
}

export class Logger {
    public static Priority = LogPriority.Medium
    public static readonly Colors = {
        [LogType.Debug]: clc.whiteBright.bold,
        [LogType.Error]: clc.red.bold,
        [LogType.Warn]: clc.yellow.bold,
        [LogType.Deprecated]: clc.magenta.bold,
        [LogType.Info]: clc.cyan.bold
    } satisfies Record<LogType, Chalk>
    public static readonly DateColor = clc.green.bold

    private static log(priority: LogPriority, type: LogType, ...args: unknown[]) {
        if (this.Priority < priority) return
        console.log(
            Logger.DateColor(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}]`),
            Logger.Colors[type](`[${LogType[type].toUpperCase()}]`),
            ...args.map(x => Logger.Colors[type](typeof x === "string" ? x : inspect(x)))
        )
    }

    public static debug(...args: unknown[]) {
        this.log(LogPriority.High, LogType.Debug, ...args)
    }

    public static warn(...args: unknown[]) {
        this.log(LogPriority.Medium, LogType.Warn, ...args)
    }

    public static deprecated(...args: unknown[]) {
        this.log(LogPriority.Medium, LogType.Deprecated, ...args)
    }

    public static error(...args: unknown[]) {
        this.log(LogPriority.Low, LogType.Error, ...args)
    }

    public static info(...args: unknown[]) {
        this.log(LogPriority.VeryLow, LogType.Info, ...args)
    }
}