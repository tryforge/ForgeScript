"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$message",
    version: "1.0.0",
    description: "Retrieves arguments from a message command",
    args: [
        {
            name: "index",
            description: "Index to get arg",
            type: NativeFunction_1.ArgType.Number,
            required: true,
            rest: false,
        },
        {
            name: "end index",
            description: "The end index",
            rest: false,
            type: NativeFunction_1.ArgType.Number,
        },
    ],
    brackets: false,
    unwrap: true,
    execute(ctx, [index, end]) {
        if (this.hasFields) {
            return this.success(end ? ctx.args.slice(index, end).join(" ") : ctx.args[index]);
        }
        return this.success(ctx.args.join(" "));
    },
});
//# sourceMappingURL=message.js.map