"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelMentionCharRegex = void 0;
const structures_1 = require("../structures");
exports.ChannelMentionCharRegex = /[<>#]/g;
exports.default = new structures_1.NativeFunction({
    name: "$findGuildChannel",
    version: "1.0.0",
    description: "Finds a channel of a guild",
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to find the channel on",
            type: structures_1.ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id, mention or channel name to find",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "return channel",
            description: "Returns the current channel id if none found",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, q, rt]) {
        const id = q.replace(exports.ChannelMentionCharRegex, "");
        if (structures_1.CompiledFunction.IdRegex.test(id)) {
            const ch = guild.channels.cache.get(id);
            if (ch)
                return this.success(ch.id);
        }
        q = q.toLowerCase();
        return this.success(guild.channels.cache.find((x) => x.id === id || x.name.toLowerCase() === q)?.id ??
            (rt ? ctx.channel?.id : undefined));
    },
});
//# sourceMappingURL=findGuildChannel.js.map