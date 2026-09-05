"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const process_1 = require("process");
const readline_1 = require("readline");
async function default_1(q) {
    const itf = (0, readline_1.createInterface)(process_1.stdin, process_1.stdout);
    return new Promise(r => {
        itf.question(q, input => {
            itf.close();
            r(input);
        });
    });
}
//# sourceMappingURL=prompt.js.map