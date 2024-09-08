"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildBoosterIDs",
    version: "1.5.0",
    description: "Returns all current boosters of a guild",
    brackets: false,
    aliases: [
        "$serverBoosterIDs"
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
    unwrap: true,
    async execute(ctx, [guild, sep]) {
        guild ??= ctx.guild;
        return this.success(guild?.roles.premiumSubscriberRole?.members.map(member => member.id).join(sep ?? ", "));
    },
});
//# sourceMappingURL=guildBoosterIDs.js.map