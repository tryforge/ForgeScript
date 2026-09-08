"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotedStringRegex = exports.PrimitiveNumberRegex = void 0;
exports.default = parsePrimitive;
exports.PrimitiveNumberRegex = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
exports.QuotedStringRegex = /^"[^"]*"$/;
function parsePrimitive(str) {
    if (typeof str !== "string")
        return str;
    if (exports.QuotedStringRegex.test(str)) {
        try {
            return JSON.parse(str);
        }
        catch (error) {
            return str.slice(1, -1);
        }
    }
    if (str === "true")
        return true;
    else if (str === "false")
        return false;
    if (exports.PrimitiveNumberRegex.test(str)) {
        const n = Number(str);
        if (Number.isFinite(n) && (!Number.isInteger(n) || Number.isSafeInteger(n)))
            return n;
    }
    return str;
}
//# sourceMappingURL=parsePrimitive.js.map