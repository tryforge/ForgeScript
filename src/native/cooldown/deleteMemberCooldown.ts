import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteMemberCooldown",
    version: "1.5.0",
    description: "Deletes cooldown for given guild and user id, binded to current command",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The id to delete its cooldown",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "user ID",
            description: "The id to delete its cooldown",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [gid, uid]) {
        ctx.client.cooldowns.delete(ctx.client.cooldowns.identifier(ctx.cmd!.id, "member", gid, uid))
        return this.success()
    },
})
