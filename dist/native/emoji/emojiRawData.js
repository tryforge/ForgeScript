"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$emojiRawData",
    version: "1.5.0",
    description: "Returns the raw data of an emoji",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "emoji ID",
            rest: false,
            required: true,
            description: "The emoji to get raw data from",
            type: structures_1.ArgType.Emoji,
        },
    ],
    output: structures_1.ArgType.Json,
    execute(ctx, [emoji]) {
        return this.successJSON((emoji ?? ctx.emoji)?.toJSON());
    },
});
//# sourceMappingURL=emojiRawData.js.map