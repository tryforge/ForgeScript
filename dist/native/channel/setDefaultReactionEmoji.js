"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const parseSingleEmoji_1 = require("../../functions/parseSingleEmoji");
exports.default = new structures_1.NativeFunction({
    name: "$setDefaultReactionEmoji",
    version: "2.2.0",
    description: "Sets a forum's default reaction emoji for posts",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to modify",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly()
        },
        {
            name: "emoji",
            description: "The new default reaction emoji",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "reason",
            description: "Reason for modifying default emoji",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [chan, emoji, reason]) {
        return this.success(!!(await chan.setDefaultReactionEmoji((0, parseSingleEmoji_1.parseSingleEmoji)(ctx, emoji), reason || undefined).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setDefaultReactionEmoji.js.map