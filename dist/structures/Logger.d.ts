import clc from "chalk";
export declare enum LogPriority {
    /**
     * Does not log anything
     */
    None = 0,
    /**
     * Lows only info
     */
    VeryLow = 1,
    /**
     * Logs only info and errors
     */
    Low = 2,
    /**
     * Logs only info, warnings and errors
     */
    Medium = 3,
    /**
     * Logs info, debug data, warnings, errors.
     */
    High = 4
}
export declare enum LogType {
    Warn = 0,
    Debug = 1,
    Info = 2,
    Error = 3
}
export declare class Logger {
    static Priority: LogPriority;
    static readonly Colors: {
        1: clc.Chalk;
        3: clc.Chalk;
        0: clc.Chalk;
        2: clc.Chalk;
    };
    static readonly DateColor: clc.Chalk;
    private static log;
    static debug(...args: unknown[]): void;
    static warn(...args: unknown[]): void;
    static error(...args: unknown[]): void;
    static info(...args: unknown[]): void;
}
//# sourceMappingURL=Logger.d.ts.map