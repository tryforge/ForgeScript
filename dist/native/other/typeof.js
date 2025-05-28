"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigIntFormatRegex = void 0;
const structures_1 = require("../../structures");
exports.BigIntFormatRegex = /^\d+n$/;
exports.default = new structures_1.NativeFunction({
    name: "$typeof",
    version: "2.4.0",
    description: "Returns the type of the provided argument",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "argument",
            rest: false,
            description: "The argument to get its type",
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [arg]) {
        let type;
        if (arg === "undefined")
            type = "undefined";
        else if (arg === "true" || arg === "false")
            type = "boolean";
        else if (exports.BigIntFormatRegex.test(arg))
            type = "bigint";
        else if (!!arg.trim() && !isNaN(Number(arg)))
            type = "number";
        else {
            try {
                JSON.parse(arg);
                type = "object";
            }
            catch {
                type = "string";
            }
        }
        return this.success(type);
    },
});
//# sourceMappingURL=typeof.js.map