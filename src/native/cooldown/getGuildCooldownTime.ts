import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$getGuildCooldownTime",
    version: "1.5.0",
    description: "Retrieves current cooldown time in ms for given guild id, binded to current command",
    brackets: true,
    aliases: [
        "$getServerCooldownTime"
    ],
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
    ],
    execute(ctx, [id]) {
        return this.success(ctx.client.cooldowns.getTimeLeft(ctx.client.cooldowns.identifier(ctx.cmd!.id, "guild", id)))
    },
})
