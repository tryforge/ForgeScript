"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$error",
    version: "1.0.0",
    description: "Returns the error message",
    unwrap: false,
    output: structures_1.ArgType.Unknown,
    execute(ctx) {
        return this.success(ctx.runtime.extras);
    },
});
//# sourceMappingURL=error.js.map