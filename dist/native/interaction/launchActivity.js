"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$launchActivity",
    version: "2.4.0",
    description: "Launches the activity of the client, if enabled",
    unwrap: false,
    async execute(ctx) {
        if (ctx.interaction && "launchActivity" in ctx.interaction) {
            await ctx.interaction.launchActivity();
        }
        return this.success();
    },
});
//# sourceMappingURL=launchActivity.js.map