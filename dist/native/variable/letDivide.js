"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$letDivide",
    version: "1.3.0",
    description: "Short-hand for $let[...;$divide[$get[...];...]]",
    unwrap: true,
    args: [
        {
            name: "key",
            description: "The key name",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "value",
            description: "The value to divide with",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [key, value]) {
        ctx.setKeyword(key, Number(ctx.getKeyword(key)) / value);
        return this.success();
    },
});
//# sourceMappingURL=letDivide.js.map