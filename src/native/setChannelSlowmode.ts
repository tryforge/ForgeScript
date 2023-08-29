import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$setChannelSlowmode",
    description: "Sets a channel slowmode, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its nsfw state",
            rest: false,
            check: (i: BaseChannel) => "setRateLimitPerUser" in i,
            type: ArgType.Channel,
            required: true
        },
        {
            name: "seconds",
            description: "The number of seconds per message",
            rest: false,
            type: ArgType.Number
        }
    ],
    async execute(ctx, [ channel, seconds ]) {
        return Return.success(
            !!(await (channel as TextChannel).setRateLimitPerUser(seconds || 0).catch(noop))
        )
    },
})