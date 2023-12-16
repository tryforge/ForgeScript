"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordinal = void 0;
function ordinal(i) {
    const j = i % 10, k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
exports.ordinal = ordinal;
//# sourceMappingURL=ordinal.js.map