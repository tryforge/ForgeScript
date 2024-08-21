import { ArgType, NativeFunction, Return } from "../../structures"

export enum PresenceStatus {
    online = "online",
    idle = "idle",
    dnd = "dnd",
    offline = "offline",
    invisible = "invisible"
}

export default new NativeFunction({
    name: "$guildMemberCount",
    version: "1.0.0",
    description: "Returns the user count of a guild",
    brackets: false,
    aliases: [
        "$serverMemberCount",
        "$serverMembersCount"
    ],
    output: ArgType.Number,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve member count from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "presence",
            description: "The presence of the users to count",
            rest: false,
            type: ArgType.Enum,
            enum: PresenceStatus
        },
    ],
    unwrap: true,
    execute(ctx, [guild, status]) {
        guild ??= ctx.guild!

        if (!status) {
            return this.success(guild?.memberCount)
        } else {
            return this.success(guild?.members.cache.filter(member => member.presence?.status === status).size)
        }
    },
})