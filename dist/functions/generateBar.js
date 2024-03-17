"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBar = void 0;
function generateBar(current, max, len = 10, fill = "█", empty = "▒") {
    return fill.repeat(Math.round(Math.min(current, max) / max * len)).padEnd(len, empty);
}
exports.generateBar = generateBar;
//# sourceMappingURL=generateBar.js.map