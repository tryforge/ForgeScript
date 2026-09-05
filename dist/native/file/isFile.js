"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isFile",
    version: "1.4.0",
    description: "Checks whether a path is a file",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "path",
            description: "The path to file or directory",
            required: true,
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [path]) {
        try {
            return this.success((0, fs_1.statSync)(path).isFile());
        }
        catch {
            return this.success(false);
        }
    },
});
//# sourceMappingURL=isFile.js.map