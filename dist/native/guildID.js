"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildID",
    version: "1.0.0",
    description: "Returns the guild id with given name",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "name",
            description: "The guild name to return the id",
            rest: true,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [args]) {
        if (!this.hasFields)
            return this.success(ctx.guild?.id);
        const name = args.join(";");
        return this.success(ctx.client.guilds.cache.find((x) => x.name === name)?.id);
    },
});
//# sourceMappingURL=guildID.js.map