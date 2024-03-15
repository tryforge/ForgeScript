import { Routes } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$api",
    version: "1.5.0",
    description: "Sends a discord api request, using a discord-api-types route",
    unwrap: true,
    args: [
        {
            name: "route name",
            description: "Route name, like so `channel`",
            type: ArgType.String,
            rest: false
        },
        {
            name: "route method",
            description: "Route method, like so `get`",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "route params;body",
            description: "Parameters for this route, body must be passed stringified, if provided",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    output: ArgType.Unknown,
    brackets: true,
    async execute(ctx, [ name, method, params ]) {
        Routes.user()
        const routeFn = Routes[name as keyof typeof Routes]
        // @ts-ignore
        const path = routeFn(...params.slice(0, routeFn.length))
        const body = params[routeFn.length + 1]
        
        return this.successFormatted(
            await ctx.client.rest[method.toLowerCase() as "post"](path, { body }).catch(ctx.noop)
        )
    }
})