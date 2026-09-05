"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$threadIsLocked",
    version: "2.7.0",
    aliases: [
        "$isLocked",
        "$threadLocked"
    ],
    description: "Returns whether a thread is locked",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The thread to check if its locked",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [channel]) {
        const thread = (channel ?? ctx.channel);
        return this.success(!!thread?.locked);
    },
});
//# sourceMappingURL=threadIsLocked.js.map