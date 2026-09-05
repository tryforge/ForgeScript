"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addPostTags",
    version: "1.5.0",
    description: "Adds tags to a forum post, returns bool",
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
            description: "The reason for adding post tags",
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
        return this.success(!!(await post.setAppliedTags([...post.appliedTags, ...tags], reason || ctx.reason).catch(ctx.noop)));
    },
});
//# sourceMappingURL=addPostTags.js.map