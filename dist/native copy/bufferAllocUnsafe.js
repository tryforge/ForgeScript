"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$bufferAllocUnsafe",
    version: "1.1.0",
    description: "Unsafely allocates given number of bytes in a buffer",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable name",
            description: "The variable to load it to, accessed with $env[<name>]",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "bytes",
            description: "The number of bytes to alloc",
            type: structures_1.ArgType.Number,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [name, bytes]) {
        return this.success(void ctx.setEnvironmentKey(name, Buffer.allocUnsafe(bytes)));
    },
});
//# sourceMappingURL=bufferAllocUnsafe.js.map