"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unparseDigital = exports.parseDigital = void 0;
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
    const DigitalFormatRegex = /^(\d+):([0-5]?\d):([0-5]?\d)$/;
    const match = digital.match(DigitalFormatRegex);
    if (!match)
        return 0;
    const [, hours, minutes, seconds] = match;
    const ms = (parseInt(hours, 10) * 60 * 60 * 1000) + (parseInt(minutes, 10) * 60 * 1000) + (parseInt(seconds, 10) * 1000);
    if (isNaN(ms))
        return 0;
    return ms;
}
exports.unparseDigital = unparseDigital;
//# sourceMappingURL=digital.js.map