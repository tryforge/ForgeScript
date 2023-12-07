"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.int2hex = exports.any2int = exports.hex2int = void 0;
function hex2int(hex) {
    return parseInt(hex.replace("#", ""), 16);
}
exports.hex2int = hex2int;
function any2int(unk) {
    return typeof unk === "number" || !isNaN(Number(unk)) ? Number(unk) : hex2int(unk);
}
exports.any2int = any2int;
function int2hex(int) {
    return Number(int).toString(16);
}
exports.int2hex = int2hex;
//# sourceMappingURL=hex.js.map