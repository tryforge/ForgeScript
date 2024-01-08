"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decompress = exports.compress = void 0;
const zlib_1 = require("zlib");
function compress(str) {
    return (0, zlib_1.deflateSync)(str).toString("hex");
}
exports.compress = compress;
function decompress(buff) {
    const firstChar = buff.toString("utf-8", 0, 1);
    if (firstChar === "{" || firstChar === "[")
        return buff.toString("utf-8");
    return (0, zlib_1.inflateSync)(buff.toString("hex")).toString("utf-8");
}
exports.decompress = decompress;
//# sourceMappingURL=zlib.js.map