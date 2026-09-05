"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$reactionEmojiID",
    version: "1.0.0",
    description: "Returns the reaction id that was used",
    unwrap: true,
    output: structures_1.ArgType.Emoji,
    execute(ctx) {
        return this.success(ctx.reaction?.emoji.id);
    },
});
//# sourceMappingURL=reactionEmojiID.js.map