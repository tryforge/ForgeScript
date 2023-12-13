"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$mentionedChannels",
    version: "1.0.0",
    brackets: false,
    description: "Returns the mentioned channels",
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the channel",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
        {
            name: "return channel",
            description: "Whether to return current channel if not found",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [i, rt]) {
        const id = this.hasFields
            ? ctx.message?.mentions.channels.at(i)?.id
            : ctx.message?.mentions.channels.map((x) => x.id).join(", ");
        return this.success(id ?? (rt ? ctx.channel?.id : undefined));
    },
});
//# sourceMappingURL=mentionedChannels.js.map