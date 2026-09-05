"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fetchApplicationEmojis",
    version: "2.5.0",
    description: "Caches all application emojis of the client",
    unwrap: false,
    async execute(ctx) {
        await ctx.fetchApplicationEmojis();
        return this.success();
    },
});
//# sourceMappingURL=fetchApplicationEmojis.js.map