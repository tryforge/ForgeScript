"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const parseSingleEmoji_1 = require("../../functions/parseSingleEmoji");
exports.default = new structures_1.NativeFunction({
    name: "$createForumTag",
    version: "2.5.0",
    description: "Creates a forum tag, returns tag id",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to create tag on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly(),
        },
        {
            name: "name",
            description: "The name for the tag",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "emoji",
            description: "The emoji for the tag",
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
    output: structures_1.ArgType.ForumTag,
    async execute(ctx, [channel, name, emoji, mod]) {
        const forum = channel;
        const tag = {
            name,
            emoji: (0, parseSingleEmoji_1.parseSingleEmoji)(ctx, emoji),
            moderated: mod || undefined
        };
        return this.success((await forum.setAvailableTags([...forum.availableTags, tag]).catch(ctx.noop))?.availableTags.at(-1)?.id);
    },
});
//# sourceMappingURL=createForumTag.js.map