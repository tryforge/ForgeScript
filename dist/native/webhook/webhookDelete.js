"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookDelete",
    version: "1.0.0",
    description: "Deletes webhook with given id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "webhook ID",
            description: "The webhook to delete",
            rest: false,
            type: structures_1.ArgType.Webhook,
            required: true,
        },
    ],
    async execute(ctx, [web]) {
        await web.delete(ctx.reason).catch(ctx.noop);
        return this.success();
    },
});
//# sourceMappingURL=webhookDelete.js.map