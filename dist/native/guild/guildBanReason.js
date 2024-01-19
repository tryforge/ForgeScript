"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildBanReason",
    version: "1.4.0",
    unwrap: true,
    brackets: false,
    aliases: [
        "$banReason",
        "$serverBanReason",
        "$getBanReason",
        "$getGuildBanReason",
        "$getServerBanReason"
    ],
    output: structures_1.ArgType.String,
    description: "Fetches a ban reason of a user",
    args: [
        {
            name: "guild ID",
            description: "The guild to pull ban from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
        },
        {
            name: "user ID",
            description: "The user to pull ban reason",
            rest: false,
            required: true,
            type: structures_1.ArgType.User
        }
    ],
    async execute(ctx, [g, u]) {
        if (!this.hasFields)
            return this.success(ctx.runtime.states?.ban?.new?.reason);
        const ban = await g.bans.fetch(u).catch(ctx.noop);
        return this.success(ban ? ban.reason : null);
    },
});
//# sourceMappingURL=guildBanReason.js.map