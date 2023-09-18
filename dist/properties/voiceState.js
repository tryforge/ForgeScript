"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceStateProperties = exports.VoiceStateProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var VoiceStateProperty;
(function (VoiceStateProperty) {
    VoiceStateProperty["channelID"] = "channelID";
    VoiceStateProperty["guildID"] = "guildID";
    VoiceStateProperty["authorID"] = "authorID";
    VoiceStateProperty["deaf"] = "deaf";
    VoiceStateProperty["selfDeaf"] = "selfDeaf";
    VoiceStateProperty["guildDeaf"] = "guildDeaf";
    VoiceStateProperty["muted"] = "muted";
    VoiceStateProperty["selfMuted"] = "selfMuted";
    VoiceStateProperty["guildMuted"] = "guildMuted";
    VoiceStateProperty["timestamp"] = "timestamp";
})(VoiceStateProperty || (exports.VoiceStateProperty = VoiceStateProperty = {}));
exports.VoiceStateProperties = (0, defineProperties_1.default)({
    timestamp: (i) => i?.channel?.createdTimestamp,
    authorID: (i) => i?.member?.id,
    channelID: (i) => i?.channelId,
    guildID: (i) => i?.guild.id,
    deaf: (i) => i?.deaf ?? false,
    guildDeaf: (i) => i?.serverDeaf ?? false,
    guildMuted: (i) => i?.serverMute ?? false,
    muted: (i) => i?.mute ?? false,
    selfDeaf: (i) => i?.selfDeaf ?? false,
    selfMuted: (i) => i?.selfMute ?? false,
});
//# sourceMappingURL=voiceState.js.map