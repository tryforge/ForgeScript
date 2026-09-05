"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$maxSafeInteger",
    version: "1.0.6",
    description: "Returns the highest safe integer",
    unwrap: false,
    output: structures_1.ArgType.Number,
    execute() {
        return this.success(Number.MAX_SAFE_INTEGER);
    },
});
//# sourceMappingURL=maxSafeInteger.js.map