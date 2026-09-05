"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$jsonEntries",
    version: "1.4.0",
    description: "Gets entries from a JSON variable",
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
    unwrap: true,
    execute(ctx, [name]) {
        const json = ctx.getEnvironmentKey(name);
        if (!json)
            return this.success();
        return this.successJSON(Object.entries(json));
    },
});
//# sourceMappingURL=jsonEntries.js.map