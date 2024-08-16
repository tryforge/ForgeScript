import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botTags",
    version: "1.5.0",
    description: "Returns the client tags",
    unwrap: true,
    aliases: ["$clientTags"],
    args: [
        {
            name: "separator",
            description: "The separator to use for every tag",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: false,
    output: ArgType.String,
    execute(ctx, [sep]) {
        return this.success(ctx.client.application.tags?.join(sep ?? ", "))
    },
})