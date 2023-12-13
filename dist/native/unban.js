"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../functions/noop"));
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$unban",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    description: "Unbans a user",
    args: [
        {
            name: "guild ID",
            description: "The guild to unban a user from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to unban",
            rest: false,
            type: structures_1.ArgType.User,
            required: true,
        },
        {
            name: "reason",
            description: "The unban reason",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(_, [guild, user, reason]) {
        const unbanned = await guild.bans.remove(user, reason || undefined).catch(noop_1.default);
        return this.success(!!unbanned);
    },
});
//# sourceMappingURL=unban.js.map