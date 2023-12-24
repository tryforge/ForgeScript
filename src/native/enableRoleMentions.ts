import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$enableRoleMentions",
    category: "unknown",
    version: "1.3.0",
    description: "Only parses these roles for mentions",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: ArgType.Guild,
            description: "The guild to retrieve roles from"
        },
        {
            name: "roles",
            rest: true,
            required: true,
            pointer: 0,
            type: ArgType.Role,
            description: "The roles to parse mentions for"
        }
    ],
    execute(ctx, [, roles ]) {
        ctx.container.allowedMentions.roles =  roles.map(x => x.id)
        return this.success()
    },
})