"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$forumDefaultLayout",
    version: "2.2.0",
    description: "Returns the default layout of a forum",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get default layout from",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.type === discord_js_1.ChannelType.GuildForum,
            required: true
        },
    ],
    output: discord_js_1.ForumLayoutType,
    execute(ctx, [chan]) {
        return this.success(discord_js_1.ForumLayoutType[chan?.defaultForumLayout]);
    },
});
//# sourceMappingURL=forumDefaultLayout.js.map