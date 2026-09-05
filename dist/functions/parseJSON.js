"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONNumberRegex = exports.JSONEndRegex = exports.JSONStartRegex = void 0;
exports.default = parseJSON;
exports.JSONStartRegex = /^[[{]/;
exports.JSONEndRegex = /^[\]}]/;
exports.JSONNumberRegex = /^\d+$/;
function parseJSON(str, parseNull = true) {
    if (typeof str !== "string" || (!parseNull && str === "null"))
        return str;
    try {
        return exports.JSONNumberRegex.test(str) ? Number(str) : JSON.parse(str);
    }
    catch (error) {
        return str;
    }
}
//# sourceMappingURL=parseJSON.js.map