import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookDelete",
    version: "1.0.0",
    description: "Deletes webhook with given id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "id",
            description: "The webhook id",
            rest: false,
            type: ArgType.Webhook,
            required: true,
        },
    ],
    async execute(ctx, [web]) {
        await web.delete().catch(ctx.noop)
        return this.success()
    },
})
