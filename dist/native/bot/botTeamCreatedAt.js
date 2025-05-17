"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botTeamCreatedAt",
    version: "2.4.0",
    description: "Returns the client's team creation timestamp",
    aliases: [
        "$clientTeamCreatedAt"
    ],
    unwrap: false,
    output: structures_1.ArgType.Number,
    async execute(ctx) {
        if (!ctx.client.application.owner)
            await ctx.client.application.fetch().catch(ctx.noop);
        const owner = ctx.client.application.owner;
        return this.success(owner instanceof discord_js_1.Team ? owner.createdTimestamp : null);
    },
});
//# sourceMappingURL=botTeamCreatedAt.js.map