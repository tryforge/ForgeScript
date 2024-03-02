"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$channelVoiceMemberIDs",
    version: "1.4.0",
    description: "Returns the members that are connected to this voice channel",
    unwrap: true,
    aliases: [
        "$channelMemberIDs"
    ],
    output: (0, array_1.default)(),
    brackets: false,
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
            rest: false,
            description: "Separator to use for every id",
            required: false,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [ch, sep]) {
        const chan = ch ?? ctx.channel;
        return this.success(chan.isVoiceBased() ? chan.members.map(x => x.id).join(sep ?? ", ") : null);
    },
});
//# sourceMappingURL=channelVoiceMemberIDs.js.map