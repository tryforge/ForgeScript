"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildTimedOutMembers",
    version: "1.5.0",
    description: "Returns all current timed out members of a guild",
    unwrap: true,
    brackets: false,
    aliases: [
        "$serverTimedOutMembers"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "separator",
            description: "The separator to use for every member",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: (0, array_1.default)(),
    async execute(ctx, [guild, sep]) {
        return this.success((guild ?? ctx.guild).members.cache.filter(m => m.isCommunicationDisabled()).map(member => member.id).join(sep ?? ", "));
    },
});
//# sourceMappingURL=guildTimedOutMembers.js.map