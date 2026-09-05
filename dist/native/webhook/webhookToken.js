"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookToken",
    version: "1.0.0",
    description: "Returns the token of a webhook",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "webhook ID",
            description: "The webhook to pull data from",
            rest: false,
            type: structures_1.ArgType.Webhook,
            required: true,
        },
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [web]) {
        return this.success(web.token);
    },
});
//# sourceMappingURL=webhookToken.js.map