"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$hasEmbeds",
    version: "1.2.0",
    brackets: false,
    output: structures_1.ArgType.Boolean,
    description: "Checks whether given message has embeds",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get message from",
            type: structures_1.ArgType.Channel,
            rest: false,
            required: true,
            check: (i) => "messages" in i
        },
        {
            name: "message ID",
            description: "The message to check for embeds",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0,
        }
    ],
    execute(ctx, [, msg]) {
        return this.success(!!(msg ?? ctx.message)?.embeds.length);
    },
});
//# sourceMappingURL=hasEmbeds.js.map