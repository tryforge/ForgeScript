"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userAccentColor",
    version: "1.0.0",
    description: "Returns the accent color of a user",
    brackets: false,
    output: structures_1.ArgType.Color,
    args: [
        {
            name: "user ID",
            description: "The user to retrieve the accent color",
            rest: false,
            required: true,
            type: structures_1.ArgType.User,
        },
    ],
    unwrap: true,
    execute(ctx, [user]) {
        return this.success((user ?? ctx.user)?.hexAccentColor);
    },
});
//# sourceMappingURL=userAccentColor.js.map