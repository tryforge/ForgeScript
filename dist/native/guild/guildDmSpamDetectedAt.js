"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildDmSpamDetectedAt",
    version: "2.2.0",
    description: "Returns when a direct message spam was detected on a guild",
    aliases: [
        "$serverDmSpamDetectedAt"
    ],
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    output: structures_1.ArgType.Number,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.incidentsData?.dmSpamDetectedAt?.getTime() ?? 0);
    },
});
//# sourceMappingURL=guildDmSpamDetectedAt.js.map