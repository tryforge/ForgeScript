"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$randomGuildID",
    version: "1.0.3",
    description: "Returns a random guild ID",
    unwrap: false,
    aliases: [
        "$randomServerID"
    ],
    output: structures_1.ArgType.Guild,
    execute(ctx) {
        return this.success(ctx.client.guilds.cache.randomKey());
    },
});
//# sourceMappingURL=randomGuildID.js.map