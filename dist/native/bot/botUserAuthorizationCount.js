"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botUserAuthorizationCount",
    version: "2.4.0",
    aliases: ["$clientUserAuthorizationCount"],
    description: "Returns the user authorization count of the bot",
    unwrap: false,
    output: structures_1.ArgType.Number,
    execute(ctx) {
        return this.success(ctx.client.application.approximateUserAuthorizationCount);
    },
});
//# sourceMappingURL=botUserAuthorizationCount.js.map