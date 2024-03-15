"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$api",
    description: "Sends a discord api request, using a discord-api-types route",
    unwrap: true,
    args: [
        {
            name: "route name",
            description: "Route name, like so `channel`",
            type: structures_1.ArgType.String,
            rest: false
        },
        {
            name: "route method",
            description: "Route method, like so `get`",
            type: structures_1.ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "route params;body",
            description: "Parameters for this route, body must be passed stringified, if provided",
            rest: true,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Unknown,
    brackets: true,
    async execute(ctx, [name, method, params]) {
        discord_js_1.Routes.user();
        const routeFn = discord_js_1.Routes[name];
        // @ts-ignore
        const path = routeFn(...params.slice(0, routeFn.length));
        const body = params[routeFn.length + 1];
        return this.successFormatted(await ctx.client.rest[method.toLowerCase()](path, { body }).catch(ctx.noop));
    }
});
//# sourceMappingURL=api.js.map