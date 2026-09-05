"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceServerProperties = exports.VoiceServerProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var VoiceServerProperty;
(function (VoiceServerProperty) {
    VoiceServerProperty["guildID"] = "guildID";
    VoiceServerProperty["endpoint"] = "endpoint";
    VoiceServerProperty["token"] = "token";
})(VoiceServerProperty || (exports.VoiceServerProperty = VoiceServerProperty = {}));
exports.VoiceServerProperties = (0, defineProperties_1.default)({
    guildID: (i) => i?.guildId,
    endpoint: (i) => i?.endpoint,
    token: (i) => i?.token
});
//# sourceMappingURL=voiceServer.js.map