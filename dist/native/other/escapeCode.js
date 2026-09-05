"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$escapeCode",
    version: "1.4.0",
    description: "Code inside this function will not be executed",
    unwrap: false,
    brackets: true,
    aliases: [
        "$esc"
    ],
    args: [
        {
            name: "code",
            description: "The code to ignore",
            type: structures_1.ArgType.String,
            required: true,
            rest: false
        }
    ],
    output: structures_1.ArgType.String,
    execute(ctx) {
        const code = this.data.fields[0];
        return this.success(code.rawValue);
    },
});
//# sourceMappingURL=escapeCode.js.map