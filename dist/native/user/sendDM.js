"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$sendDM",
    version: "1.0.0",
    description: "Sends a DM to the user",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Message,
    args: [
        {
            name: "user ID",
            description: "The user to direct message",
            rest: false,
            type: structures_1.ArgType.User,
            required: true,
        },
        {
            name: "content",
            description: "The content to send",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "return message ID",
            description: "Whether to return the id of the newly created message",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    async execute(ctx, [user, content, returnMessageID]) {
        ctx.container.content = content || undefined;
        const msg = await ctx.container.send(user);
        return this.success(returnMessageID ? msg?.id : undefined);
    },
});
//# sourceMappingURL=sendDM.js.map