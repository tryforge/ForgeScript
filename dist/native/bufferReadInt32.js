"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$bufferReadInt32",
    version: "1.2.0",
    description: "Reads int from a buffer",
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
        }
    ],
    execute(ctx, [name, begin]) {
        return this.success(void ctx.getEnvironmentInstance(Buffer, name)?.readInt32LE(begin));
    },
});
//# sourceMappingURL=bufferReadInt32.js.map