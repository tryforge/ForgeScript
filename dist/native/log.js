"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
const Return_1 = require("../structures/Return");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$log",
    version: "1.0.0",
    description: "Log something to console",
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The message to log to console",
            rest: true,
            type: NativeFunction_1.ArgType.String,
            required: true
        }
    ],
    brackets: true,
    execute(ctx, [args]) {
        console.log(...args);
        return Return_1.Return.success();
    },
});
//# sourceMappingURL=log.js.map