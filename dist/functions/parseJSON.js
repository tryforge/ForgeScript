"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONNumberRegex = exports.JSONEndRegex = exports.JSONStartRegex = void 0;
exports.default = parseJSON;
exports.JSONStartRegex = /^[[{]/;
exports.JSONEndRegex = /^[\]}]/;
exports.JSONNumberRegex = /^\d+$/;
function parseJSON(str) {
    if (typeof str !== "string")
        return str;
    try {
        return exports.JSONNumberRegex.test(str) ? str : JSON.parse(str);
    }
    catch (error) {
        return str;
    }
}
//# sourceMappingURL=parseJSON.js.map