"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$loadEmojiContext",
    version: "2.7.0",
    description: "Loads an emoji instance to the current context, this is not reversible and is adviced to use with $scope",
    aliases: [
        "$useEmojiContext",
        "$asEmojiContext"
    ],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to adapt context with",
            rest: false,
            required: true,
            type: structures_1.ArgType.Emoji
        }
    ],
    execute(ctx, [e]) {
        ctx.obj = e;
        return this.success();
    },
});
//# sourceMappingURL=loadEmojiContext.js.map