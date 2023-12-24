"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const NoMentionRegex = /<(?:@[&!]?|#)\d{16,23}>/g;
exports.default = new structures_1.NativeFunction({
    name: "$noMentionMessage",
    version: "1.0.0",
    description: "Retrieves arguments from a message without mentions",
    args: [
        {
            name: "index",
            description: "Index to get arg",
            type: structures_1.ArgType.Number,
            required: true,
            rest: false,
        },
        {
            name: "end index",
            description: "The end index",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: false,
    unwrap: true,
    execute(ctx, [index, end]) {
        const msg = ctx.args.join(" ").replace(NoMentionRegex, "").trim().split(/ +/);
        if (this.hasFields) {
            return this.success(end ? msg.slice(index, end) : msg[index]);
        }
        return this.success(msg.join(" "));
    },
});
//# sourceMappingURL=noMentionMessage.js.map