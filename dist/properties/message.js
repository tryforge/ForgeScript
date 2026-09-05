"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
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
    MessageProperty["type"] = "type";
    MessageProperty["flags"] = "flags";
    MessageProperty["username"] = "username";
    MessageProperty["authorID"] = "authorID";
    MessageProperty["channelID"] = "channelID";
    MessageProperty["threadID"] = "threadID";
    MessageProperty["guildID"] = "guildID";
    MessageProperty["webhookID"] = "webhookID";
    MessageProperty["interactionID"] = "interactionID";
    MessageProperty["interactionType"] = "interactionType";
    MessageProperty["timestamp"] = "timestamp";
    MessageProperty["editTimestamp"] = "editTimestamp";
    MessageProperty["hasSnapshots"] = "hasSnapshots";
    MessageProperty["hasThread"] = "hasThread";
    MessageProperty["hasPoll"] = "hasPoll";
    MessageProperty["system"] = "system";
    MessageProperty["pinned"] = "pinned";
    MessageProperty["tts"] = "tts";
    MessageProperty["url"] = "url";
    MessageProperty["attachments"] = "attachments";
    MessageProperty["stickers"] = "stickers";
    MessageProperty["embeds"] = "embeds";
    MessageProperty["crosspostable"] = "crosspostable";
    MessageProperty["deletable"] = "deletable";
    MessageProperty["editable"] = "editable";
    MessageProperty["pinnable"] = "pinnable";
})(MessageProperty || (exports.MessageProperty = MessageProperty = {}));
exports.MessageProperties = (0, defineProperties_1.default)({
    id: (m) => m?.id,
    content: (m) => m?.content,
    type: (m) => (m ? discord_js_1.MessageType[m.type] : undefined),
    flags: (m, sep) => m?.flags.toArray().join(sep ?? ", "),
    username: (m) => m?.author?.username,
    authorID: (m) => m?.author?.id,
    channelID: (m) => m?.channelId,
    threadID: (m) => m?.thread?.id,
    guildID: (m) => m?.guildId,
    webhookID: (m) => m?.webhookId,
    interactionID: (m) => m?.interactionMetadata?.id,
    interactionType: (m) => (m?.interactionMetadata ? discord_js_1.InteractionType[m.interactionMetadata.type] : null),
    timestamp: (m) => m?.createdTimestamp,
    editTimestamp: (m) => m?.editedTimestamp,
    hasSnapshots: (m) => !!m?.messageSnapshots?.size,
    hasThread: (m) => m?.hasThread,
    hasPoll: (m) => !!m?.poll,
    system: (m) => m?.system,
    pinned: (m) => m?.pinned,
    tts: (m) => m?.tts,
    url: (m) => m?.url,
    attachments: (m, sep) => m?.attachments.map(x => x.url).join(sep ?? ", "),
    stickers: (m, sep) => m?.stickers.map(x => x.url).join(sep ?? ", "),
    embeds: (m) => (m && "embeds" in m ? JSON.stringify(m.embeds, undefined, 4) : null),
    crosspostable: (m) => m?.crosspostable,
    deletable: (m) => m?.deletable,
    editable: (m) => m?.editable,
    pinnable: (m) => m?.pinnable,
});
//# sourceMappingURL=message.js.map