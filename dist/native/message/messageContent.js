"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$messageContent",
    version: "1.4.0",
    description: "Retrieves the content of a message",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: NativeFunction_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to get its content",
            rest: false,
            type: NativeFunction_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    output: NativeFunction_1.ArgType.String,
    execute(ctx, [, message]) {
        return this.success((message ?? ctx.message)?.content);
    },
});
//# sourceMappingURL=messageContent.js.map