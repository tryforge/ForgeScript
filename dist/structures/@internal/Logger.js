"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogType = exports.LogPriority = void 0;
const chalk_1 = __importDefault(require("chalk"));
const process_1 = require("process");
const util_1 = require("util");
var LogPriority;
(function (LogPriority) {
    /**
     * Does not log anything
     */
    LogPriority[LogPriority["None"] = 0] = "None";
    /**
     * Lows only info
     */
    LogPriority[LogPriority["VeryLow"] = 1] = "VeryLow";
    /**
     * Logs only info and errors
     */
    LogPriority[LogPriority["Low"] = 2] = "Low";
    /**
     * Logs only info, warnings and errors
     */
    LogPriority[LogPriority["Medium"] = 3] = "Medium";
    /**
     * Logs info, debug data, warnings, errors.
     */
    LogPriority[LogPriority["High"] = 4] = "High";
})(LogPriority || (exports.LogPriority = LogPriority = {}));
var LogType;
(function (LogType) {
    LogType[LogType["Warn"] = 0] = "Warn";
    LogType[LogType["Deprecated"] = 1] = "Deprecated";
    LogType[LogType["Debug"] = 2] = "Debug";
    LogType[LogType["Info"] = 3] = "Info";
    LogType[LogType["Error"] = 4] = "Error";
})(LogType || (exports.LogType = LogType = {}));
class Logger {
    static Priority = LogPriority.Medium;
    static Colors = {
        [LogType.Debug]: chalk_1.default.whiteBright.bold,
        [LogType.Error]: chalk_1.default.red.bold,
        [LogType.Warn]: chalk_1.default.yellow.bold,
        [LogType.Deprecated]: chalk_1.default.magenta.bold,
        [LogType.Info]: chalk_1.default.cyan.bold
    };
    static DateColor = chalk_1.default.green.bold;
    static log(priority, type, ...args) {
        if (this.Priority < priority)
            return;
        console.log(Logger.DateColor(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}]`), Logger.Colors[type](`[${LogType[type].toUpperCase()}]`), ...args.map(x => Logger.Colors[type](typeof x === "string" ? x : (0, util_1.inspect)(x))));
    }
    static clearLine() {
        process_1.stdout.moveCursor(0, -1);
        process_1.stdout.clearLine(0);
    }
    static debug(...args) {
        this.log(LogPriority.High, LogType.Debug, ...args);
    }
    static warn(...args) {
        this.log(LogPriority.Medium, LogType.Warn, ...args);
    }
    static deprecated(...args) {
        this.log(LogPriority.Medium, LogType.Deprecated, ...args);
    }
    static error(...args) {
        this.log(LogPriority.Low, LogType.Error, ...args);
    }
    static info(...args) {
        this.log(LogPriority.VeryLow, LogType.Info, ...args);
    }
    static infoUpdate(...args) {
        this.clearLine();
        return this.info(...args);
    }
    static warnUpdate(...args) {
        this.clearLine();
        return this.warn(...args);
    }
    static debugUpdate(...args) {
        this.clearLine();
        return this.debug(...args);
    }
    static deprecatedUpdate(...args) {
        this.clearLine();
        return this.deprecated(...args);
    }
    static errorUpdate(...args) {
        this.clearLine();
        return this.error(...args);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map