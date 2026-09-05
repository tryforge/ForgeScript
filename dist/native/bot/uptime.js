"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$uptime",
    version: "1.0.0",
    aliases: [
        "$botUptime",
        "$clientUptime"
    ],
    output: structures_1.ArgType.Number,
    description: "Returns the bots uptime",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.client.uptime);
    },
});
//# sourceMappingURL=uptime.js.map