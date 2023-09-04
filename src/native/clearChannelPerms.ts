import { BaseChannel, PermissionFlagsBits, PermissionsString, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$clearChannelPerms",
    version: "1.0.3",
    description: "Clears permission overwrites from a channel, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to clear perms from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased() && "permissionOverwrites" in i
        },
        {
            name: "id",
            description: "The role or member id to clear these perms for",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "perms",
            description: "The perms to clear from the id",
            rest: true,
            type: ArgType.String,
            required: true,
            enum: PermissionFlagsBits
        }
    ],
    async execute(ctx, [ ch, id, perms ]) {
        const channel = ch as TextChannel
        
        const obj: Partial<Record<PermissionsString, null>> = {}

        perms.forEach(x => obj[x as PermissionsString] = null)

        return Return.success(
            !!(await channel.permissionOverwrites.create(id, obj))
        )
    },
})