import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$httpPing",
    version: "1.5.0",
    description: "Returns the response time of the HTTP request",
    aliases: ["$httpResponseTime"],
    unwrap: false,
    experimental: true,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(ctx.http.response?.ping?.toFixed() ?? 0)
    },
})