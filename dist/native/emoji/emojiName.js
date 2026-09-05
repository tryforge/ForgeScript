"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$emojiName",
    version: "1.2.0",
    description: "Returns the emoji name",
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to return its name",
            rest: false,
            type: structures_1.ArgType.Emoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        return this.success((emoji ?? ctx.emoji)?.name);
    },
});
//# sourceMappingURL=emojiName.js.map