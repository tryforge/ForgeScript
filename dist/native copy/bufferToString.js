"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$bufferToString",
    version: "1.1.0",
    description: "Stringifies a buffer",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable name",
            description: "The variable the buffer is allocated on",
            type: structures_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "encoding",
            description: "The encoding to stringify with",
            type: structures_1.ArgType.String,
            rest: false
        }
    ],
    execute(ctx, [name, encoding]) {
        return this.success(void ctx.getEnvironmentInstance(Buffer, name)?.toString(encoding || "utf-8"));
    },
});
//# sourceMappingURL=bufferToString.js.map