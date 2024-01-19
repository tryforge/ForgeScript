"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const Logger_1 = require("../../structures/@internal/Logger");
exports.default = new structures_1.NativeFunction({
    name: "$logger",
    version: "1.3.0",
    description: "Implements Logger API of ForgeScript.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "log type",
            description: "The log type",
            enum: Logger_1.LogType,
            type: structures_1.ArgType.Enum,
            required: true,
            rest: false
        },
        {
            name: "text",
            description: "What to log",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [type, value]) {
        Logger_1.Logger[Logger_1.LogType[type].toLowerCase()](value);
        return this.success();
    },
});
//# sourceMappingURL=logger.js.map