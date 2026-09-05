"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayUnique",
    version: "2.5.0",
    description: "Removes duplicate elements from the array",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: structures_1.ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "other variable",
            description: "The variable to load result to, leave empty to return output",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        },
    ],
    output: structures_1.ArgType.Json,
    execute(ctx, [variable, other]) {
        const arr = ctx.getEnvironmentInstance(Array, variable);
        if (arr !== null) {
            const unique = (0, lodash_1.uniqWith)(arr, lodash_1.isEqual);
            if (other)
                ctx.setEnvironmentKey(other, unique);
            else
                return this.successJSON(unique);
        }
        return this.success();
    },
});
//# sourceMappingURL=arrayUnique.js.map