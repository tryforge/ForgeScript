import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$getMemberCooldownTime",
    version: "1.5.0",
    description: "Retrieves current cooldown time in ms for given guild and user id, binded to current command",
    brackets: true,
    output: ArgType.Number,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild id to get its cooldown",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "user ID",
            description: "The user id to get its cooldown",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [gid, uid]) {
        return this.success(ctx.client.cooldowns.getTimeLeft(ctx.client.cooldowns.identifier(ctx.cmd!.id, "member", gid, uid)))
    },
})
