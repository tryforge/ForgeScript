"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundboardSoundProperties = exports.SoundboardSoundProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var SoundboardSoundProperty;
(function (SoundboardSoundProperty) {
    SoundboardSoundProperty["name"] = "name";
    SoundboardSoundProperty["id"] = "id";
    SoundboardSoundProperty["guildID"] = "guildID";
    SoundboardSoundProperty["userID"] = "userID";
    SoundboardSoundProperty["emoji"] = "emoji";
    SoundboardSoundProperty["volume"] = "volume";
    SoundboardSoundProperty["timestamp"] = "timestamp";
    SoundboardSoundProperty["available"] = "available";
    SoundboardSoundProperty["url"] = "url";
})(SoundboardSoundProperty || (exports.SoundboardSoundProperty = SoundboardSoundProperty = {}));
exports.SoundboardSoundProperties = (0, defineProperties_1.default)({
    name: (i) => i?.name,
    emoji: (i) => i?.emoji?.toString(),
    guildID: (i) => i?.guildId,
    userID: (i) => i?.user?.id,
    id: (i) => i?.soundId,
    volume: (i) => i?.volume,
    timestamp: (i) => i?.createdTimestamp,
    available: (i) => i?.available ?? false,
    url: (i) => i?.url,
});
//# sourceMappingURL=sound.js.map