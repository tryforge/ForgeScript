import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$enableUserMentions",
    version: "1.3.0",
    description: "Only parses these users for mentions",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "users",
            rest: true,
            required: true,
            type: ArgType.User,
            description: "The users to parse mentions for"
        }
    ],
    execute(ctx, [ users ]) {
        ctx.container.allowedMentions.users = users.map(x => x.id)
        return this.success()
    },
})