import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$setChannelTopic",
    category: "unknown",
    version: "1.0.0",
    description: "Sets a channel topic, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its topic",
            rest: false,
            check: (i: BaseChannel) => "setTopic" in i,
            type: ArgType.Channel,
            required: true,
        },
        {
            name: "topic",
            description: "The topic to set",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(_, [channel, topic]) {
        return this.success(!!(await (channel as TextChannel).setTopic(topic || null).catch(noop)))
    },
})
