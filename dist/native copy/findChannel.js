"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const findGuildChannel_1 = require("./findGuildChannel");
exports.default = new structures_1.NativeFunction({
    name: "$findChannel",
    version: "1.0.0",
    description: "Finds a channel",
    brackets: true,
    args: [
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
    execute(ctx, [q, rt]) {
        const id = q.replace(findGuildChannel_1.ChannelMentionCharRegex, "");
        if (structures_1.CompiledFunction.IdRegex.test(id)) {
            const ch = ctx.client.channels.cache.get(id);
            if (ch)
                return this.success(ch.id);
        }
        const rtId = rt ? ctx.channel?.id || undefined : undefined;
        q = q.toLowerCase();
        return this.success(ctx.client.channels.cache.find((x) => x.id === id || ("name" in x && x.name.toLowerCase() === q))?.id ?? rtId);
    },
});
//# sourceMappingURL=findChannel.js.map