"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceEffectProperties = exports.VoiceEffectProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var VoiceEffectProperty;
(function (VoiceEffectProperty) {
    VoiceEffectProperty["emoji"] = "emoji";
    VoiceEffectProperty["channelID"] = "channelID";
    VoiceEffectProperty["guildID"] = "guildID";
    VoiceEffectProperty["userID"] = "userID";
    VoiceEffectProperty["soundID"] = "soundID";
    VoiceEffectProperty["soundVolume"] = "soundVolume";
    VoiceEffectProperty["animationID"] = "animationID";
    VoiceEffectProperty["animationType"] = "animationType";
})(VoiceEffectProperty || (exports.VoiceEffectProperty = VoiceEffectProperty = {}));
exports.VoiceEffectProperties = (0, defineProperties_1.default)({
    emoji: (i) => i?.emoji?.toString(),
    channelID: (i) => i?.channelId,
    guildID: (i) => i?.guild.id,
    userID: (i) => i?.userId,
    soundID: (i) => i?.soundId,
    soundVolume: (i) => i?.soundVolume,
    animationID: (i) => i?.animationId,
    animationType: (i) => discord_js_1.VoiceChannelEffectSendAnimationType[i?.animationType]
});
//# sourceMappingURL=voiceEffect.js.map