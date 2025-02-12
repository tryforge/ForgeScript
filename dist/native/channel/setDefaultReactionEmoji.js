"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
function parseDefaultReactionEmoji(ctx, str) {
    if (!str)
        return null;
    const parsed = (0, discord_js_1.parseEmoji)(str);
    const id = structures_1.CompiledFunction.CDNIdRegex.exec(str)?.[2] ?? parsed?.id;
    const emoji = ctx.client.emojis.cache.get(id ?? str) ?? parsed;
    return emoji ? { id: emoji.id ?? null, name: emoji.id ? null : emoji.name } : null;
}
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
        return this.success(!!(await chan.setDefaultReactionEmoji(parseDefaultReactionEmoji(ctx, emoji), reason || undefined).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setDefaultReactionEmoji.js.map