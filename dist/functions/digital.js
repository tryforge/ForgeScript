"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unparseDigital = exports.parseDigital = void 0;
const DigitalFormatRegex = /^(?:(\d+):)?([0-5]?\d):([0-5]?\d)$/;
function parseDigital(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    const HH = String(hours).padStart(2, "0");
    const MM = String(minutes).padStart(2, "0");
    const SS = String(seconds).padStart(2, "0");
    return `${HH}:${MM}:${SS}`;
}
exports.parseDigital = parseDigital;
function unparseDigital(digital) {
    const match = digital.match(DigitalFormatRegex);
    if (!match)
        return 0;
    const [, hours, minutes, seconds] = match;
    const h = parseInt(hours ?? "0", 10);
    const m = parseInt(minutes, 10);
    const s = parseInt(seconds, 10);
    const ms = (h * 3600000) + (m * 60000) + (s * 1000);
    return isNaN(ms) ? 0 : ms;
}
exports.unparseDigital = unparseDigital;
//# sourceMappingURL=digital.js.map