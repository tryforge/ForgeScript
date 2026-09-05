"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$modifyPostTags",
    version: "1.5.0",
    aliases: ["$editPostTags"],
    description: "Modifies tags of a forum post, returns bool",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
            description: "The post to edit tags on",
        },
        {
            name: "reason",
            description: "The reason for modifying post tags",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "tags",
            description: "The tags for the post",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        }
    ],
    brackets: true,
    async execute(ctx, [channel, reason, tags]) {
        const post = channel;
        return this.success(!!(await post.setAppliedTags([...new Set(post.appliedTags.filter(tag => !tags.includes(tag)).concat(tags.filter(tag => !post.appliedTags.includes(tag))))], reason || ctx.reason).catch(ctx.noop)));
    },
});
//# sourceMappingURL=modifyPostTags.js.map