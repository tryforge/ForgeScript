"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBar = generateBar;
exports.generateAdvancedBar = generateAdvancedBar;
function generateBar(current, max, len = 10, fill = "█", empty = "▒", round = true, fillStart = "", fillEnd = "", emptyStart = "", emptyEnd = "") {
    let fillN = Math[round ? "round" : "trunc"](Math.min(Math.max(current, 0), max) / max * len);
    let emptyN = len - fillN;
    let start = "", end = "";
    if (len > 1) {
        if (fillN > 0 && emptyN > 0) {
            start = fillStart || "";
            end = emptyEnd || "";
            fillN -= start ? 1 : 0;
            emptyN -= end ? 1 : 0;
        }
        else if (fillN > 0) {
            start = fillStart || "";
            end = fillEnd || "";
            fillN -= (start ? 1 : 0) + (end ? 1 : 0);
        }
        else if (emptyN > 0) {
            start = emptyStart || "";
            end = emptyEnd || "";
            emptyN -= (start ? 1 : 0) + (end ? 1 : 0);
        }
    }
    fillN = Math.max(fillN, 0);
    emptyN = Math.max(emptyN, 0);
    return start + fill.repeat(fillN) + empty.repeat(emptyN) + end;
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