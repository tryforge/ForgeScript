"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelCount",
    version: "1.0.0",
    description: "Returns the channel count of all servers",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "categories",
            description: "The categories to filter by",
            rest: true,
            required: true,
            enum: discord_js_1.ChannelType,
            type: structures_1.ArgType.Enum,
        },
    ],
    execute(ctx, [categories]) {
        return this.success((this.hasFields
            ? ctx.client.channels.cache.filter((x) => categories.includes(x.type))
            : ctx.client.channels.cache).size);
    },
});
//# sourceMappingURL=channelCount.js.map