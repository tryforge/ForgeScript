"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../../functions/noop"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildBanReason",
    version: "1.4.0",
    unwrap: true,
    brackets: true,
    aliases: [
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
        const ban = await g.bans.fetch(u).catch(noop_1.default);
        return this.success(ban ? ban.reason : null);
    },
});
//# sourceMappingURL=guildBanReason.js.map