"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildBannedMembers",
    version: "1.4.0",
    description: "Returns banned member ids of a guild",
    aliases: [
        "$serverBannedMembers"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
            description: "The guild to pull banned members from"
        },
        {
            name: "separator",
            rest: false,
            type: structures_1.ArgType.String,
            description: "The separator for each id"
        }
    ],
    output: (0, array_1.default)(),
    async execute(ctx, [g, sep]) {
        g ??= ctx.guild;
        const bans = await g?.bans.fetch().catch(ctx.noop);
        return this.success(bans ? bans.map(x => x.user.id).join(sep ?? ", ") : null);
    },
});
//# sourceMappingURL=guildBannedMembers.js.map