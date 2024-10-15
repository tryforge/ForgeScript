import { BaseChannel, GuildChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$clearChannelPerms",
    version: "1.0.3",
    description: "Deletes all permission overwrites from the channel or given id, returns bool",
    brackets: true,
    output: ArgType.Boolean,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to delete perms from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "permissionOverwrites" in i,
        },
        {
            name: "id",
            description: "The role or member id to delete all perms for",
            rest: false,
            required: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [ch, id]) {
        const perms = (ch as GuildChannel).permissionOverwrites
        
        if (id) {
            return this.success(!!(await perms.delete(id).catch(ctx.noop)))
        } else {
            return this.success(!!(await perms.set([]).catch(ctx.noop)))
        }
    },
})