import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$randomGuildID",
    version: "1.0.3",
    description: "Returns a random guild ID",
    unwrap: false,
    aliases: [
        "$randomServerID"
    ],
    output: ArgType.Guild,
    execute(ctx) {
        return this.success(ctx.client.guilds.cache.randomKey())
    },
})
