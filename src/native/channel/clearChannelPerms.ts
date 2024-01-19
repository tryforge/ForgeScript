import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$clearChannelPerms",
    version: "1.0.3",
    description: "Deletes all permission overwrites for given id, returns bool",
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
            check: (i: BaseChannel) => i.isTextBased() && "permissionOverwrites" in i,
        },
        {
            name: "id",
            description: "The role or member id to delete all perms for",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [ch, id]) {
        const channel = ch as TextChannel
        return this.success(!!(await channel.permissionOverwrites.delete(id)))
    },
})
