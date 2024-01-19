"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createForumPost",
    version: "1.0.0",
    description: "Creates a forum post, returns the post channel id",
    unwrap: true,
    output: structures_1.ArgType.Channel,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.type === discord_js_1.ChannelType.GuildForum,
            description: "The channel to create a post on",
        },
        {
            name: "title",
            description: "The post title",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "description",
            description: "The post description",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "tags",
            description: "The tags for the post",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [channel, title, desc, tags]) {
        const forum = channel;
        ctx.container.content = desc || undefined;
        const t = await forum.threads
            .create({
            appliedTags: tags,
            name: title,
            message: ctx.container.getOptions(),
        })
            .catch(ctx.noop);
        ctx.container.reset();
        return this.success(t ? t.id : undefined);
    },
});
//# sourceMappingURL=createForumPost.js.map