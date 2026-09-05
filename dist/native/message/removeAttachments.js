"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$removeAttachments",
    version: "2.7.0",
    description: "Removes all attachments from a message, returns bool",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to remove attachments from",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, message]) {
        return this.success(!!(await (message ?? ctx.message)?.removeAttachments().catch(ctx.noop)));
    },
});
//# sourceMappingURL=removeAttachments.js.map