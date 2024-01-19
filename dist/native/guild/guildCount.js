"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildCount",
    version: "1.0.0",
    description: "Returns the guild count",
    unwrap: true,
    aliases: [
        "$serverCount",
        "$serversCount"
    ],
    output: structures_1.ArgType.Number,
    execute(ctx) {
        return this.success(ctx.client.guilds.cache.size);
    },
});
//# sourceMappingURL=guildCount.js.map