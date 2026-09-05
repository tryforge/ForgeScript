"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botToken",
    version: "1.0.0",
    description: "Returns the client token",
    unwrap: false,
    aliases: [
        "$clientToken"
    ],
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.client.token);
    },
});
//# sourceMappingURL=botToken.js.map