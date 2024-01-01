"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildBanReason",
    unwrap: true,
    brackets: true,
    aliases: [
        "$serverBanReason",
        "$getBanReason",
        "$getGuildBanReason",
        "$getServerBanReason"
    ],
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
        const ban = await g.bans.fetch(u).catch(lodash_1.noop);
        return this.success(ban ? ban.reason : null);
    },
});
//# sourceMappingURL=guildBanReason.js.map