"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createChannel",
    version: "1.0.0",
    description: "Creates a channel in a guild, returns the channel id",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Channel,
    args: [
        {
            name: "guild ID",
            description: "The guild to create this channel on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "channel name",
            description: "The name for the channel",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "channel type",
            description: "The type of the channel, some are not supported",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.ChannelType,
            required: true,
        },
        {
            name: "topic",
            description: "The topic for the channel",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "parent ID",
            description: "The parent id for the channel",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [guild, name, type, topic, parentId]) {
        const ch = await guild.channels
            .create({
            type: type,
            name,
            topic: topic || undefined,
            parent: parentId,
        })
            .catch(ctx.noop);
        return this.success(ch ? ch.id : undefined);
    },
});
//# sourceMappingURL=createChannel.js.map