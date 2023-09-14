"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const Return_1 = require("../structures/Return");
const NoMentionRegex = /<(@|#)(&|!)?(\d{16,23})>/g;
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
            type: structures_1.ArgType.Number
        }
    ],
    brackets: false,
    unwrap: true,
    execute(ctx, [index, end]) {
        const msg = ctx.args.join(" ").replace(NoMentionRegex, "").trim().split(/ +/);
        if (this.hasFields) {
            return Return_1.Return.success(end ? msg.slice(index, end) : msg[index]);
        }
        return Return_1.Return.success(msg.join(" "));
    },
});
//# sourceMappingURL=noMentionMessage.js.map