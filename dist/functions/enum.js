"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumToArray = enumToArray;
function enumToArray(x) {
    return Object.keys(x).filter((x) => isNaN(Number(x)));
}
//# sourceMappingURL=enum.js.map