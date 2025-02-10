"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setDefaultThreadArchiveDuration",
    version: "1.5.0",
    description: "Sets a forum's default auto archive duration of posts",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    aliases: [
        "$setDefaultThreadAutoArchiveDuration"
    ],
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to modify",
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly(),
            rest: false,
            required: true
        },
        {
            name: "duration",
            description: "The new duration of auto archive",
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.ThreadAutoArchiveDuration,
            rest: false,
            required: true
        },
        {
            name: "reason",
            description: "Reason for modifying archive duration",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    async execute(ctx, [ch, dur, reason]) {
        return this.success(!!(await ch.setDefaultAutoArchiveDuration(dur, reason || undefined).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setDefaultThreadArchiveDuration.js.map