"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(n, max) {
    const splitTimes = n % max === 0 ? Math.floor(n / max) : Math.floor(n / max) + 1;
    const arr = new Array(splitTimes);
    arr.fill(max);
    const left = n - max * (splitTimes - 1);
    if (left !== 0)
        arr[arr.length - 1] = left;
    return arr;
}
//# sourceMappingURL=splitNumber.js.map