"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setThreadArchiveDuration",
    version: "1.5.0",
    description: "Sets a thread's auto archive duration",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    aliases: [
        "$setThreadAutoArchiveDuration"
    ],
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The thread to modify",
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
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
        return this.success(!!(await ch.setAutoArchiveDuration(dur, reason || undefined).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setThreadArchiveDuration.js.map