"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$emojiCreatedAt",
    version: "1.0.0",
    description: "Returns the emoji creation timestamp",
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to return its creation timestamp",
            rest: false,
            type: structures_1.ArgType.Emoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        return this.success((emoji ?? ctx.emoji)?.createdTimestamp);
    },
});
//# sourceMappingURL=emojiCreatedAt.js.map