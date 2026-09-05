"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookEdit",
    version: "1.0.0",
    description: "Edits webhook with given id, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "webhook ID",
            description: "The webhook to edit",
            rest: false,
            type: structures_1.ArgType.Webhook,
            required: true,
        },
        {
            name: "name",
            description: "The new name for the webhook",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "url",
            description: "The new avatar for the webhook",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [web, name, avatar]) {
        const edit = await web
            .edit({
            avatar: avatar || undefined,
            name: name || undefined,
            reason: ctx.reason
        })
            .catch(ctx.noop);
        return this.success(!!edit);
    },
});
//# sourceMappingURL=webhookEdit.js.map