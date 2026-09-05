"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$hasComponents",
    version: "2.5.0",
    description: "Checks whether given message has components",
    brackets: false,
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
            description: "The message to check for components",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0,
        }
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [, msg]) {
        return this.success(!!(msg ?? ctx.message)?.components.length);
    },
});
//# sourceMappingURL=hasComponents.js.map