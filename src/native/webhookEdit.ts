import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$webhookEdit",
    category: "unknown",
    version: "1.0.0",
    description: "Edits webhook with given id",
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
        {
            name: "name",
            description: "The new name for the webhook",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "url",
            description: "The new avatar for the webhook",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(_, [web, name, avatar]) {
        const edit = await web
            .edit({
                avatar: avatar || undefined,
                name: name || undefined,
            })
            .catch(noop)

        return this.success(!!edit)
    },
})
