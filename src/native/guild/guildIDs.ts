import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildIDs",
    category: "guild",
    version: "1.0.0",
    description: "Returns all the guilds this bot is in",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator for each guild",
            type: ArgType.String,
            required: true,
            rest: false,
        },
    ],
    execute(ctx, [sep]) {
        return this.success(ctx.client.guilds.cache.map((x) => x.id).join(sep || ", "))
    },
})
