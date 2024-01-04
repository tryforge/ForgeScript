"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$channelChildrenIDs",
    version: "1.0.3",
    description: "Returns the children ids this category has",
    brackets: false,
    output: (0, array_1.default)(),
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The category to get its children",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
            check: (i) => i.type === discord_js_1.ChannelType.GuildCategory,
        },
        {
            name: "separator",
            description: "The separator to use for every channel",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [channel, sep]) {
        return this.success((channel ?? ctx.channel)?.children?.cache.map((x) => x.id).join(sep || ", "));
    },
});
//# sourceMappingURL=channelChildrenIDs.js.map