"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookIsUserCreated",
    version: "2.3.0",
    description: "Checks whether given webhook is user created",
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
    output: structures_1.ArgType.Boolean,
    execute(ctx, [web]) {
        return this.success(web.isUserCreated());
    },
});
//# sourceMappingURL=webhookIsUserCreated.js.map