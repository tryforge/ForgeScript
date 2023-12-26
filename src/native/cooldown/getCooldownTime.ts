import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$getCooldownTime",
    version: "1.0.3",
    description: "Retrieves current cooldown time in ms for given id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "id",
            description: "The id to get its cooldown",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [id]) {
        return this.success(ctx.client.cooldowns.getTimeLeft(id))
    },
})
