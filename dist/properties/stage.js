"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageProperties = exports.StageProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var StageProperty;
(function (StageProperty) {
    StageProperty["channelID"] = "channelID";
    StageProperty["id"] = "id";
    StageProperty["topic"] = "topic";
    StageProperty["timestamp"] = "timestamp";
    StageProperty["guildID"] = "guildID";
    StageProperty["privacyLevel"] = "privacyLevel";
    StageProperty["eventId"] = "eventId";
})(StageProperty || (exports.StageProperty = StageProperty = {}));
exports.StageProperties = (0, defineProperties_1.default)({
    id: i => i?.id,
    channelID: i => i?.channelId,
    guildID: i => i?.guildId,
    topic: i => i?.topic,
    timestamp: i => i?.createdTimestamp,
    privacyLevel: i => discord_js_1.StageInstancePrivacyLevel[i?.privacyLevel],
    eventId: i => i?.guildScheduledEventId
});
//# sourceMappingURL=stage.js.map