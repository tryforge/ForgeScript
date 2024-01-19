"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBar = void 0;
function generateBar(current, max, len, fill = "█", empty = "▒") {
    const fillN = Math.round(Math.min(current, max) / max * len);
    return fill.repeat(fillN).padEnd(len, empty);
}
exports.generateBar = generateBar;
//# sourceMappingURL=generateBar.js.map