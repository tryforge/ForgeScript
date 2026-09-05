"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$updateApplicationCommands",
    version: "1.2.0",
    description: "Updates application commands, also registers new ones",
    unwrap: false,
    async execute(ctx) {
        ctx.client.applicationCommands.load();
        await ctx.client.applicationCommands.registerGlobal();
        return this.success();
    },
});
//# sourceMappingURL=updateApplicationCommands.js.map