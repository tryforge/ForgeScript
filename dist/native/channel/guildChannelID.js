"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildChannelID",
    version: "1.4.0",
    description: "Gets the guild channel id of a channel name",
    unwrap: true,
    output: structures_1.ArgType.Channel,
    brackets: false,
    args: [
        structures_1.Arg.requiredGuild(),
        {
            name: "name",
            description: "The channel name to get it's id",
            required: true,
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [g, str]) {
        if (!this.hasFields)
            return this.success(ctx.channel?.id);
        return this.success(g.channels.cache.find((x) => "name" in x && x.name === str)?.id);
    },
});
//# sourceMappingURL=guildChannelID.js.map