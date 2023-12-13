import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$deleteCooldown",
    version: "1.0.3",
    description: "Deletes cooldown of given id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "id",
            description: "The id to delete its cooldown",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [id]) {
        ctx.client.cooldowns.delete(id)
        return this.success()
    },
})
