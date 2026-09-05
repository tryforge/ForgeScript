"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fetchApplication",
    version: "2.7.0",
    description: "Fetches the application of the client",
    unwrap: false,
    async execute(ctx) {
        await ctx.client.application.fetch().catch(ctx.noop);
        return this.success();
    },
});
//# sourceMappingURL=fetchApplication.js.map