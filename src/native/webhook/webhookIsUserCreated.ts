import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookIsUserCreated",
    version: "2.3.0",
    description: "Checks whether given webhook is user created",
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
    output: ArgType.Boolean,
    async execute(ctx, [web]) {
        return this.success(web.isUserCreated())
    },
})