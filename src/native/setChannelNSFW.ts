import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$setChannelNSFW",
    version: "1.0.0",
    description: "Sets a channel nsfw state, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its nsfw state",
            rest: false,
            check: (i: BaseChannel) => "setNSFW" in i,
            type: ArgType.Channel,
            required: true,
        },
        {
            name: "state",
            description: "The state to set",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    async execute(_, [channel, state]) {
        return this.success(!!(await (channel as TextChannel).setNSFW(state || false).catch(noop)))
    },
})
