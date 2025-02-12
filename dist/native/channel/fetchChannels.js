"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fetchChannels",
    version: "2.2.0",
    description: "Caches all channels of a guild",
    aliases: ["$fetchChannel"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to cache channels of",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "channel ID",
            description: "The channel to fetch",
            rest: false,
            type: structures_1.ArgType.Channel,
            pointer: 0
        },
    ],
    async execute(ctx, [guild, channel]) {
        guild ??= ctx.guild;
        if (channel)
            await guild?.channels.fetch(channel.id);
        else
            await guild?.channels.fetch();
        return this.success();
    },
});
//# sourceMappingURL=fetchChannels.js.map