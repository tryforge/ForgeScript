"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementConsume",
    version: "1.5.0",
    description: "Consumes an entitlement from an interaction, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "entitlement ID",
            description: "The ID of the entitlement to consume",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [id]) {
        return this.success(!!(await ctx.interaction?.entitlements.get(id)?.consume().then(() => true).catch(ctx.noop)));
    },
});
//# sourceMappingURL=entitlementConsume.js.map