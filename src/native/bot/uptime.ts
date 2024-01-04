import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$uptime",
    version: "1.0.0",
    aliases: [
        "$botUptime",
        "$clientUptime"
    ],
    output: ArgType.Number,
    description: "Returns the bots uptime",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.client.uptime)
    },
})
