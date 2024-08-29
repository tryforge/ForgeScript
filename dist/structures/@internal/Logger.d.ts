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
    Deprecated = 1,
    Debug = 2,
    Info = 3,
    Error = 4
}
export declare class Logger {
    static Priority: LogPriority;
    static readonly Colors: {
        2: any;
        4: any;
        0: any;
        1: any;
        3: any;
    };
    static readonly DateColor: any;
    private static log;
    private static clearLine;
    static debug(...args: unknown[]): void;
    static warn(...args: unknown[]): void;
    static deprecated(...args: unknown[]): void;
    static error(...args: unknown[]): void;
    static info(...args: unknown[]): void;
    static infoUpdate(...args: unknown[]): void;
    static warnUpdate(...args: unknown[]): void;
    static debugUpdate(...args: unknown[]): void;
    static deprecatedUpdate(...args: unknown[]): void;
    static errorUpdate(...args: unknown[]): void;
}
//# sourceMappingURL=Logger.d.ts.map