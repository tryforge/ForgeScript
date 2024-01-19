import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildCount",
    version: "1.0.0",
    description: "Returns the guild count",
    unwrap: true,
    aliases: [
        "$serverCount",
        "$serversCount"
    ],
    output: ArgType.Number,
    execute(ctx) {
        return this.success(ctx.client.guilds.cache.size)
    },
})
