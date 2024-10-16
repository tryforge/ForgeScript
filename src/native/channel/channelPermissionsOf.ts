import { BaseChannel, GuildChannel, PermissionFlagsBits } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import array from "../../functions/array"

export enum PermissionsStateType {
    allow = "allow",
    deny = "deny"
}

export default new NativeFunction({
    name: "$channelPermissionsOf",
    version: "1.5.0",
    description: "Returns specific permissions of a role or member in a channel",
    aliases: [
        "$channelPermsOf",
    ],
    output: array(PermissionFlagsBits),
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get perms from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "permissionOverwrites" in i
        },
        {
            name: "id",
            description: "The role or user to get perms of",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "state",
            description: "The state of the perms to return",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: PermissionsStateType
        },
        {
            name: "separator",
            description: "The separator to use for every perm",
            rest: false,
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [ channel, id, state, sep ]) {
        return this.success((channel as GuildChannel).permissionOverwrites.cache.get(id)?.[state].toArray().join(sep ?? ", "))
    },
})