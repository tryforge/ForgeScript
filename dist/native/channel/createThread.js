"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createThread",
    version: "1.0.3",
    description: "Creates a thread, returns thread channel id on success",
    unwrap: true,
    output: structures_1.ArgType.Channel,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to create the thread at",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => "threads" in i,
        },
        {
            name: "name",
            description: "The name for the thread",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "message ID",
            description: "The message to start thread for",
            rest: false,
            pointer: 0,
            type: structures_1.ArgType.Message,
        },
        {
            name: "private",
            description: "Whether this thread is private",
            rest: false,
            type: structures_1.ArgType.Boolean
        },
        {
            name: "reason",
            description: "Reason for creating thread",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    async execute(ctx, [channel, name, m, priv, reason]) {
        const ch = channel;
        const success = await ch.threads
            .create({
            name,
            startMessage: m ?? undefined,
            reason: reason ?? undefined,
            type: priv ? discord_js_1.ChannelType.PrivateThread : discord_js_1.ChannelType.PublicThread
        })
            .catch(ctx.noop);
        return this.success(success ? success.id : undefined);
    },
});
//# sourceMappingURL=createThread.js.map