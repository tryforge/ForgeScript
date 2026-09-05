"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteForumTags",
    version: "2.5.0",
    description: "Deletes tags from a forum, returns bool",
    aliases: ["$deleteForumTag"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to delete tags from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly(),
        },
        {
            name: "tags",
            description: "The tags to delete",
            rest: true,
            required: true,
            type: structures_1.ArgType.ForumTag,
            pointer: 0
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [channel, tags]) {
        const forum = channel;
        const newTags = forum.availableTags.filter((x) => !tags.some((tag) => x.id === tag.id));
        return this.success(!!(await forum.setAvailableTags(newTags).catch(ctx.noop)));
    },
});
//# sourceMappingURL=deleteForumTags.js.map