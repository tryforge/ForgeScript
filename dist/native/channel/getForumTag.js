"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const forumTag_1 = require("../../properties/forumTag");
exports.default = new structures_1.NativeFunction({
    name: "$getForumTag",
    version: "2.7.0",
    description: "Returns the tag of a forum",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to pull tags from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly(),
        },
        {
            name: "tag ID",
            description: "The tag to retrieve",
            rest: false,
            required: true,
            type: structures_1.ArgType.ForumTag,
            pointer: 0
        },
        {
            name: "property",
            description: "The property of the tag to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: forumTag_1.ForumTagProperty
        },
    ],
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.Unknown
    ],
    execute(ctx, [, tag, prop]) {
        if (prop)
            return this.success(forumTag_1.ForumTagProperties[prop](tag));
        return this.successJSON(tag);
    },
});
//# sourceMappingURL=getForumTag.js.map