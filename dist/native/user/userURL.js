"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userURL",
    version: "2.7.0",
    description: "Returns the url of a user",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to get its url",
            rest: false,
            type: structures_1.ArgType.User,
            required: true,
        },
    ],
    output: structures_1.ArgType.URL,
    execute(ctx, [user]) {
        const id = (user ?? ctx.user)?.id;
        return this.success(id ? `https://discord.com/users/${id}` : null);
    },
});
//# sourceMappingURL=userURL.js.map