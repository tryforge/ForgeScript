"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$forumDefaultThreadArchiveDuration",
    version: "2.2.0",
    description: "Returns the default auto archive duration for threads of a forum",
    aliases: [
        "$forumDefaultThreadAutoArchiveDuration"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get default sort order from",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly(),
            required: true
        },
    ],
    output: discord_js_1.ThreadAutoArchiveDuration,
    execute(ctx, [chan]) {
        return this.success(discord_js_1.ThreadAutoArchiveDuration[chan?.defaultAutoArchiveDuration]);
    },
});
//# sourceMappingURL=forumDefaultThreadArchiveDuration.js.map