"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$repeat",
    version: "1.1.0",
    description: "Repeats given text for x times",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to repeat",
            type: structures_1.ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "amount",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
            description: "How many times to repeat this text"
        }
    ],
    execute(ctx, [txt, times]) {
        return this.success(txt.repeat(times));
    },
});
//# sourceMappingURL=repeat.js.map