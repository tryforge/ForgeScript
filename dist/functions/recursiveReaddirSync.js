"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = recursiveReaddirSync;
const fs_1 = require("fs");
const path_1 = require("path");
function recursiveReaddirSync(path) {
    const arr = new Array();
    for (const file of (0, fs_1.readdirSync)(path)) {
        const p = (0, path_1.join)(path, file);
        const stats = (0, fs_1.lstatSync)(p);
        if (stats.isDirectory()) {
            arr.push(...recursiveReaddirSync(p));
        }
        else {
            arr.push(p);
        }
    }
    return arr;
}
//# sourceMappingURL=recursiveReaddirSync.js.map