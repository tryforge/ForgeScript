"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberRoles",
    version: "1.0.0",
    description: "Returns the role ids of a member",
    unwrap: true,
    brackets: false,
    output: (0, array_1.default)(),
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The user to get roles from",
            rest: false,
            pointer: 0,
            type: structures_1.ArgType.Member,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each role",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [, user, sep]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member;
        return this.success((member instanceof discord_js_1.GuildMember
            ? member?.roles.cache.filter((x) => x.id !== x.guild.id).map((x) => x.id)
            : ctx.interaction?.member?.roles)?.join(sep || ", "));
    },
});
//# sourceMappingURL=memberRoles.js.map