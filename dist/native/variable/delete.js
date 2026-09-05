"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$delete",
    version: "1.0.0",
    description: "Deletes a keyword",
    unwrap: true,
    output: NativeFunction_1.ArgType.Boolean,
    args: [
        {
            name: "key",
            description: "The key name",
            rest: false,
            type: NativeFunction_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [name]) {
        return this.success(ctx.deleteKeyword(name));
    },
});
//# sourceMappingURL=delete.js.map