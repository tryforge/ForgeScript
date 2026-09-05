"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const parseSingleEmoji_1 = require("../../functions/parseSingleEmoji");
exports.default = new structures_1.NativeFunction({
    name: "$editForumTag",
    version: "2.5.0",
    description: "Edits an existing forum tag, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to edit tag on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly(),
        },
        {
            name: "tag ID",
            description: "The tag to edit",
            rest: false,
            required: true,
            type: structures_1.ArgType.ForumTag,
            pointer: 0
        },
        {
            name: "name",
            description: "The new name for the tag",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "emoji",
            description: "The new emoji for the tag",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "moderated",
            description: "Whether the tag can only be applied by mods",
            rest: false,
            type: structures_1.ArgType.Boolean,
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [channel, tag, name, emoji, mod]) {
        const forum = channel;
        const tags = forum.availableTags;
        const index = tags.findIndex((x) => x.id === tag.id);
        if (name)
            tag.name = name;
        if (emoji !== null)
            tag.emoji = (0, parseSingleEmoji_1.parseSingleEmoji)(ctx, emoji);
        if (typeof mod === "boolean")
            tag.moderated = mod;
        tags[index] = tag;
        return this.success(!!(await forum.setAvailableTags(tags).catch(ctx.noop)));
    },
});
//# sourceMappingURL=editForumTag.js.map