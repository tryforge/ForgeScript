"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$hasAllEntitlements",
    version: "1.5.0",
    aliases: [
        "$interactionHasAllEntitlements"
    ],
    description: "Checks whether this interaction user has all of the given entitlements",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "entitlement name",
            description: "The name of the entitlements to validate",
            rest: true,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [names]) {
        return this.success(ctx.interaction?.entitlements.hasAll(...names));
    },
});
//# sourceMappingURL=hasAllEntitlements.js.map