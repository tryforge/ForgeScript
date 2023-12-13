"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$bufferResize",
    version: "1.1.0",
    description: "Resizes a buffer",
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
            name: "length",
            description: "The new length for this buffer",
            required: true,
            type: structures_1.ArgType.Number,
            rest: false
        }
    ],
    execute(ctx, [name, length]) {
        const buffer = ctx.getEnvironmentInstance(Buffer, name);
        if (buffer !== null) {
            const ref = Buffer.alloc(length);
            buffer.copy(ref, 0, 0, ref.length);
            ctx.setEnvironmentKey(name, ref);
        }
        return this.success();
    },
});
//# sourceMappingURL=bufferResize.js.map