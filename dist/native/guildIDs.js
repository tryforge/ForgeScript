"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildIDs",
    version: "1.0.0",
    description: "Returns all the guilds this bot is in",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator for each guild",
            type: structures_1.ArgType.String,
            required: true,
            rest: false,
        },
    ],
    execute(ctx, [sep]) {
        return this.success(ctx.client.guilds.cache.map((x) => x.id).join(sep || ", "));
    },
});
//# sourceMappingURL=guildIDs.js.map