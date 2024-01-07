"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONEndRegex = exports.JSONStartRegex = void 0;
exports.JSONStartRegex = /^[[{]/;
exports.JSONEndRegex = /^[\]}]/;
function parseJSON(str) {
    if (typeof str !== "string")
        return str;
    try {
        return JSON.parse(str);
    }
    catch (error) {
        return str;
    }
}
exports.default = parseJSON;
//# sourceMappingURL=parseJSON.js.map