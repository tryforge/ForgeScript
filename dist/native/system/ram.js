"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$ram",
    version: "1.0.0",
    description: "Returns the current ram usage in MB",
    aliases: [
        "$memory",
        "$ramUsage",
    ],
    unwrap: false,
    output: structures_1.ArgType.Number,
    execute() {
        return this.success(process.memoryUsage().heapUsed / (1024 ** 2));
    },
});
//# sourceMappingURL=ram.js.map