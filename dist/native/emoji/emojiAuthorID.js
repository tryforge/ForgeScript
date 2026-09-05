"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$emojiAuthorID",
    version: "2.6.0",
    description: "Returns the author id of an emoji",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to return its author",
            rest: false,
            required: true,
            type: structures_1.ArgType.Emoji,
        },
    ],
    output: structures_1.ArgType.User,
    execute(ctx, [emoji]) {
        emoji ??= ctx.emoji;
        return this.success(emoji && "author" in emoji ? emoji.author?.id : undefined);
    },
});
//# sourceMappingURL=emojiAuthorID.js.map