"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.hex2int = hex2int;
exports.int2hex = int2hex;
exports.resolveColor = resolveColor;
const discord_js_1 = require("discord.js");
function hex2int(hex) {
    return parseInt(hex.replace("#", ""), 16);
}
function int2hex(int) {
    return Number(int).toString(16).padStart(6, "0");
}
function resolveColor(value) {
    if (typeof value === "number" || !isNaN(Number(value)))
        return Number(value);
    if (value === "Random")
        return Math.floor(Math.random() * 0xFFFFFF);
    else if (value in discord_js_1.Colors)
        return discord_js_1.Colors[value];
    else
        return hex2int(value);
}
//# sourceMappingURL=hex.js.map