import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$setChannelName",
    version: "1.0.0",
    description: "Sets a channel name, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its name",
            rest: false,
            check: (i: BaseChannel) => "setName" in i,
            type: ArgType.Channel,
            required: true,
        },
        {
            name: "name",
            description: "The name to set",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(_, [channel, name]) {
        return this.success(!!(await (channel as TextChannel).setName(name).catch(noop)))
    },
})
