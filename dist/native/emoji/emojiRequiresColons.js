"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$emojiRequiresColons",
    version: "1.0.0",
    description: "Returns whether the emoji requires colons",
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to return its colons state",
            rest: false,
            type: structures_1.ArgType.Emoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        emoji ??= ctx.emoji;
        return this.success(emoji && "requiresColons" in emoji ? emoji.requiresColons : undefined);
    },
});
//# sourceMappingURL=emojiRequiresColons.js.map