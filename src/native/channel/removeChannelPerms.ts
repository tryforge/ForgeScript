import { BaseChannel, PermissionFlagsBits, PermissionsString, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$removeChannelPerms",
    version: "1.0.3",
    description: "Removes permission overwrites from a channel, returns bool",
    brackets: true,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The channel to remove perms from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased() && "permissionOverwrites" in i,
        },
        {
            name: "id",
            description: "The role or member id to remove these perms from",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "perms",
            description: "The perms to remove from the id",
            rest: true,
            type: ArgType.String,
            required: true,
            enum: PermissionFlagsBits,
        },
    ],
    async execute(_, [ch, id, perms]) {
        const channel = ch as TextChannel

        const obj: Partial<Record<PermissionsString, boolean>> = {}

        perms.forEach((x) => (obj[x as PermissionsString] = false))

        return this.success(!!(await channel.permissionOverwrites.create(id, obj)))
    },
})
