import { BaseChannel, GuildChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$cloneChannel",
    version: "1.4.0",
    description: "Clones given channel",
    brackets: true,
    output: ArgType.Channel,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to clone",
            type: ArgType.Channel,
            rest: false,
            required: true,
            check: (i: BaseChannel) => "clone" in i
        }
    ],
    async execute(ctx, [ raw ]) {
        return this.success(
            (await (<GuildChannel>raw).clone().catch(ctx.noop))?.id
        )
    },
})