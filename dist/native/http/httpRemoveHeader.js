"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$httpRemoveHeader",
    version: "1.0.0",
    description: "Removes an HTTP header",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The header name",
            rest: false,
            type: NativeFunction_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [name]) {
        if (ctx.http.headers)
            delete ctx.http.headers[name];
        return this.success();
    },
});
//# sourceMappingURL=httpRemoveHeader.js.map