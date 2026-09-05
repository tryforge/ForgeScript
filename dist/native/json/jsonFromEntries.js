"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$jsonFromEntries",
    version: "2.7.0",
    description: "Converts an array of entries into an object",
    aliases: ["$fromEntries"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable to get entries from",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        }
    ],
    output: structures_1.ArgType.Json,
    execute(ctx, [name]) {
        const arr = ctx.getEnvironmentKey(name);
        if (!Array.isArray(arr))
            return this.success();
        try {
            return this.successJSON(Object.fromEntries(arr));
        }
        catch {
            return this.success();
        }
    },
});
//# sourceMappingURL=jsonFromEntries.js.map