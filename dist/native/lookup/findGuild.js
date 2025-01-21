"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$findGuild",
    version: "2.2.0",
    description: "Finds a guild",
    brackets: true,
    output: structures_1.ArgType.Guild,
    args: [
        {
            name: "query",
            description: "The id or guild name to find",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "return guild",
            description: "Returns the current guild id if none found",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    unwrap: true,
    execute(ctx, [q, rt]) {
        if (structures_1.CompiledFunction.IdRegex.test(q)) {
            const guild = ctx.client.guilds.cache.get(q);
            if (guild)
                return this.success(guild.id);
        }
        return this.success(ctx.client.guilds.cache.find((x) => x.id === q || x.name === q)?.id ?? (rt ? ctx.guild?.id : undefined));
    },
});
//# sourceMappingURL=findGuild.js.map