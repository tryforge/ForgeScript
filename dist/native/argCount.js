"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$argCount",
    version: "1.0.0",
    brackets: false,
    description: "Counts number of args in message",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "Text to count arguments",
            required: true,
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [text]) {
        if (this.hasFields)
            return this.success(text.trim().split(/ +/).length);
        return this.success(ctx.args.length);
    },
});
//# sourceMappingURL=argCount.js.map