"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientThemeProperties = exports.ClientThemeProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
const discord_js_1 = require("discord.js");
var ClientThemeProperty;
(function (ClientThemeProperty) {
    ClientThemeProperty["baseMix"] = "baseMix";
    ClientThemeProperty["baseTheme"] = "baseTheme";
    ClientThemeProperty["gradientAngle"] = "gradientAngle";
    ClientThemeProperty["colors"] = "colors";
})(ClientThemeProperty || (exports.ClientThemeProperty = ClientThemeProperty = {}));
exports.ClientThemeProperties = (0, defineProperties_1.default)({
    baseMix: (i) => i?.baseMix,
    baseTheme: (i) => i?.baseTheme ? discord_js_1.BaseThemeType[i?.baseTheme] : null,
    gradientAngle: (i) => i?.gradientAngle,
    colors: (i, sep) => i?.colors.join(sep ?? ", "),
});
//# sourceMappingURL=clientTheme.js.map