"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$memberFlags",
    version: "1.5.0",
    description: "Returns the flags of a member",
    brackets: false,
    unwrap: true,
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
            pointer: 0,
            description: "The user to get its flags",
            rest: false,
            type: structures_1.ArgType.Member,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every flag",
            type: structures_1.ArgType.String,
            required: false,
            rest: false,
        },
    ],
    output: (0, array_1.default)(discord_js_1.GuildMemberFlags),
    execute(ctx, [, user, sep]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member;
        return this.success(new discord_js_1.GuildMemberFlagsBitField(member?.flags).toArray().join(sep ?? ", "));
    },
});
//# sourceMappingURL=memberFlags.js.map