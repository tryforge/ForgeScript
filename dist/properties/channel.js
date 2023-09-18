"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelProperties = exports.ChannelProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var ChannelProperty;
(function (ChannelProperty) {
    ChannelProperty["id"] = "id";
    ChannelProperty["type"] = "type";
    ChannelProperty["topic"] = "topic";
    ChannelProperty["bitrate"] = "bitrate";
    ChannelProperty["members"] = "members";
    ChannelProperty["name"] = "name";
    ChannelProperty["timestamp"] = "timestamp";
})(ChannelProperty || (exports.ChannelProperty = ChannelProperty = {}));
exports.ChannelProperties = (0, defineProperties_1.default)({
    bitrate: (i) => (i?.isVoiceBased() ? i.bitrate : undefined),
    id: (i) => i?.id,
    timestamp: (i) => i?.createdTimestamp,
    name: (i) => (i && "name" in i ? i.name : undefined),
    members: (i, sep) => i && "members" in i
        ? (i.members instanceof discord_js_1.Collection ? i.members : i.members.cache)
            .map((x) => x.id)
            .join(sep || ", ")
        : undefined,
    topic: (i) => (i && "topic" in i ? i.topic : undefined),
    type: (i) => discord_js_1.ChannelType[i?.type],
});
//# sourceMappingURL=channel.js.map