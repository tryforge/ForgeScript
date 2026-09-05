"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$c",
    version: "1.0.0",
    description: "Marks any code inside as a comment",
    unwrap: false,
    args: [
        {
            name: "comment",
            rest: true,
            required: true,
            description: "The comments",
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute() {
        return this.success();
    },
});
//# sourceMappingURL=c.js.map