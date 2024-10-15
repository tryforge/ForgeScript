import { BaseChannel, GuildChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$cloneChannelPerms",
    version: "1.5.0",
    description: "Clones the given channel's perms to another channel, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to clone its perms",
            type: ArgType.Channel,
            rest: false,
            required: true,
            check: (i: BaseChannel) => "permissionOverwrites" in i,
        },
        {
            name: "channel ID",
            description: "The other channel to set new perms for",
            type: ArgType.Channel,
            rest: false,
            required: true,
            check: (i: BaseChannel) => "permissionOverwrites" in i,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ chan1, chan2 ]) {
        return this.success(!!(await (chan2 as GuildChannel).permissionOverwrites.set((chan1 as GuildChannel).permissionOverwrites.cache).catch(ctx.noop)))
    },
})