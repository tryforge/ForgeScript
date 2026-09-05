"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$emojiAnimated",
    version: "1.0.0",
    description: "Returns whether the emoji is animated",
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to return its animation state",
            rest: false,
            type: structures_1.ArgType.Emoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        return this.success((emoji ?? ctx.emoji)?.animated);
    },
});
//# sourceMappingURL=emojiAnimated.js.map