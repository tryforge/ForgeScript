import { BaseChannel, GuildTextBasedChannel, PermissionFlagsBits } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$channelHasAnyPerms",
    version: "1.4.0",
    aliases: [
        "$channelHasAnyPerm"
    ],
    description: "Returns whether role or member has any of the perms in a channel",
    output: ArgType.Boolean,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get perms from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "permissionsFor" in i
        },
        {
            name: "id",
            description: "The role or user to get perms of",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "permissions",
            description: "The perms to check for",
            rest: true,
            required: true,
            type: ArgType.Enum,
            enum: PermissionFlagsBits
        }
    ],
    brackets: true,
    execute(ctx, [ channel, id, perms ]) {
        return this.success((channel as GuildTextBasedChannel).permissionsFor(id)?.any(perms))
    },
})