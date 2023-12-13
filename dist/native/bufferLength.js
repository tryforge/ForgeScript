"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$bufferLength",
    version: "1.1.0",
    description: "Returns the length of a buffer",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable name",
            description: "The variable the buffer is allocated on",
            type: structures_1.ArgType.String,
            required: true,
            rest: false
        }
    ],
    execute(ctx, [name]) {
        return this.success(void ctx.getEnvironmentInstance(Buffer, name)?.length);
    },
});
//# sourceMappingURL=bufferLength.js.map