"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const chalk_1 = __importDefault(require("chalk"));
exports.default = new structures_1.NativeFunction({
    name: "$chalkLog",
    version: "1.3.0",
    description: "Logs colored text to the console using Chalk.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "log color",
            description: "The log color (e.g., red, green, blue)",
            type: structures_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "text",
            description: "What to log",
            type: structures_1.ArgType.String,
            required: true,
            rest: false
        }
    ],
    execute(ctx, [color, value]) {
        const fn = chalk_1.default[color];
        if (typeof fn !== "function") {
            return this.customError(`Invalid chalk color: "${color}"`);
        }
        console.log(fn(value));
        return this.success();
    }
});
//# sourceMappingURL=chalkLog.js.map