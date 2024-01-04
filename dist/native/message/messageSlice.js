"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageSlice",
    version: "1.3.0",
    description: "Slices this message's args",
    brackets: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "start",
            description: "The start index",
            rest: false,
            required: false,
            type: structures_1.ArgType.Number
        },
        {
            name: "end",
            description: "The end index",
            rest: false,
            required: false,
            type: structures_1.ArgType.Number
        }
    ],
    unwrap: true,
    execute(ctx, [start, end]) {
        return this.success(ctx.args.slice(start ?? undefined, end ?? undefined).join(" "));
    },
});
//# sourceMappingURL=messageSlice.js.map