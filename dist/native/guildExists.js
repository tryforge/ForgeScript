"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildExists",
    version: "1.0.0",
    description: "Returns whether an guild id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to check",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    async execute(ctx, [id]) {
        return structures_1.Return.success(structures_1.CompiledFunction.IdRegex.test(id) &&
            ctx.client.guilds.cache.has(id));
    },
});
//# sourceMappingURL=guildExists.js.map