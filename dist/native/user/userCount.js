"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userCount",
    version: "1.0.0",
    description: "Returns the user count of the bot",
    unwrap: true,
    output: structures_1.ArgType.Number,
    execute(ctx) {
        return this.success(ctx.client.guilds.cache.reduce((x, y) => x + (y.memberCount || 0), 0));
    },
});
//# sourceMappingURL=userCount.js.map