import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$getCooldownTime",
    description: "Retrieves current cooldown time in ms for given channel id, binded to current command",
    brackets: true,
    output: ArgType.Number,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to get its cooldown",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [id]) {
        return this.success(ctx.client.cooldowns.getTimeLeft(ctx.client.cooldowns.identifier(ctx.cmd!.id, "channel", id)))
    },
})
