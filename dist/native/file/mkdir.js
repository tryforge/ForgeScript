"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$mkdir",
    version: "1.0.0",
    description: "Creates a directory",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "path",
            description: "The path for the dir",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [path]) {
        return this.success(void (0, fs_1.mkdirSync)(path));
    },
});
//# sourceMappingURL=mkdir.js.map