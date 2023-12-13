"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$bufferReadUtf8",
    version: "1.1.0",
    description: "Reads utf8 string from a buffer",
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
            name: "index",
            description: "The index to start reading at",
            required: true,
            type: structures_1.ArgType.Number,
            rest: false
        },
        {
            name: "end index",
            description: "The index to end reading at",
            required: false,
            type: structures_1.ArgType.Number,
            rest: false
        },
    ],
    execute(ctx, [name, begin, end]) {
        return this.success(void ctx.getEnvironmentInstance(Buffer, name)?.toString("utf-8", begin, end || undefined));
    },
});
//# sourceMappingURL=bufferReadUtf8.js.map