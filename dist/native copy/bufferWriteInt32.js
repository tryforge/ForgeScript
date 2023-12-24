"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$bufferWriteInt32",
    version: "1.2.0",
    description: "Writes int32 to a buffer",
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
            description: "The index to start writing on",
            required: true,
            type: structures_1.ArgType.Number,
            rest: false
        },
        {
            name: "int",
            description: "The int to write",
            type: structures_1.ArgType.Number,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [name, index, n]) {
        return this.success(void ctx.getEnvironmentInstance(Buffer, name)?.writeInt32LE(n, index));
    },
});
//# sourceMappingURL=bufferWriteInt32.js.map