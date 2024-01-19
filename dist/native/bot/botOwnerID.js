"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$botOwnerID",
    version: "1.0.0",
    description: "Returns the bot owner id",
    brackets: false,
    aliases: [
        "$clientOwnerID"
    ],
    args: [
        {
            name: "return members",
            description: "Whether to return all members",
            rest: false,
            required: false,
            type: structures_1.ArgType.Boolean
        },
        {
            name: "separator",
            description: "The separator to use for every id",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    output: (0, array_1.default)(),
    unwrap: true,
    async execute(ctx, [returnAll, sep]) {
        if (!ctx.client.application.owner)
            await ctx.client.application.fetch().catch(ctx.noop);
        const owner = ctx.client.application.owner;
        return this.success(owner ? owner instanceof discord_js_1.User ? owner.id : returnAll ? owner.members.map(x => x.id).join(sep ?? ", ") : owner.ownerId : null);
    },
});
//# sourceMappingURL=botOwnerID.js.map