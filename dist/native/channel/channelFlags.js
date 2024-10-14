"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$channelFlags",
    version: "1.5.0",
    description: "Returns the flags of a channel",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel",
            rest: false,
            type: structures_1.ArgType.Channel,
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
    output: (0, array_1.default)(discord_js_1.ChannelFlags),
    execute(ctx, [channel, sep]) {
        return this.success((channel ?? ctx.channel)?.flags?.toArray().join(sep ?? ", "));
    },
});
//# sourceMappingURL=channelFlags.js.map