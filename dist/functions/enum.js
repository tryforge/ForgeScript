"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumToArray = void 0;
function enumToArray(x) {
    return Object.keys(x).filter((x) => isNaN(Number(x)));
}
exports.enumToArray = enumToArray;
//# sourceMappingURL=enum.js.map