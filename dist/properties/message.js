"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProperties = exports.MessageProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var MessageProperty;
(function (MessageProperty) {
    MessageProperty["id"] = "id";
    MessageProperty["content"] = "content";
    MessageProperty["flags"] = "flags";
    MessageProperty["username"] = "username";
    MessageProperty["type"] = "type";
    MessageProperty["channelID"] = "channelID";
    MessageProperty["guildID"] = "guildID";
    MessageProperty["authorID"] = "authorID";
    MessageProperty["timestamp"] = "timestamp";
    MessageProperty["editTimestamp"] = "editTimestamp";
    MessageProperty["hasPoll"] = "hasPoll";
    MessageProperty["system"] = "system";
    MessageProperty["pinned"] = "pinned";
    MessageProperty["url"] = "url";
    MessageProperty["attachments"] = "attachments";
    MessageProperty["stickers"] = "stickers";
})(MessageProperty || (exports.MessageProperty = MessageProperty = {}));
exports.MessageProperties = (0, defineProperties_1.default)({
    content: (m) => m?.content,
    id: (m) => m?.id,
    flags: (m, sep) => m?.flags.toArray().join(sep ?? ", "),
    channelID: (m) => m?.channelId,
    guildID: (m) => m?.guildId,
    type: (m) => (m ? discord_js_1.MessageType[m.type] : undefined),
    username: (m) => m?.author?.username,
    authorID: (m) => m?.author?.id,
    timestamp: (m) => m?.createdTimestamp,
    editTimestamp: (m) => m?.editedTimestamp,
    hasPoll: (m) => !!m?.poll,
    system: (m) => m?.system,
    pinned: (m) => m?.pinned,
    url: (m) => m?.url,
    attachments: (m, sep) => m?.attachments.map(x => x.url).join(sep ?? ", "),
    stickers: (m, sep) => m?.stickers.map(x => x.url).join(sep ?? ", "),
});
//# sourceMappingURL=message.js.map