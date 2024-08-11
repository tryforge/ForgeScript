"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBar = generateBar;
exports.generateAdvancedBar = generateAdvancedBar;
function generateBar(current, max, len = 10, fill = "█", empty = "▒", round = true) {
    const fillN = Math[round ? "round" : "trunc"](Math.min(current, max) / max * len);
    return fill.repeat(fillN) + empty.repeat(len - fillN);
}
function generateAdvancedBar(current, max, len = 10, data) {
    let out = "";
    const portion = max / len;
    while (len--) {
        const diff = Math.max(current, 0) / portion;
        out += (current -= portion, data.find((x, i) => diff <= (i + 1) / data.length) ?? data.at(-1));
    }
    return out;
}
//# sourceMappingURL=generateBar.js.map