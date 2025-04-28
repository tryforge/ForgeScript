"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookProperties = exports.WebhookProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var WebhookProperty;
(function (WebhookProperty) {
    WebhookProperty["id"] = "id";
    WebhookProperty["name"] = "name";
    WebhookProperty["type"] = "type";
    WebhookProperty["avatar"] = "avatar";
    WebhookProperty["ownerID"] = "ownerID";
    WebhookProperty["channelID"] = "channelID";
    WebhookProperty["guildID"] = "guildID";
    WebhookProperty["sourceChannelID"] = "sourceChannelID";
    WebhookProperty["sourceGuildID"] = "sourceGuildID";
    WebhookProperty["timestamp"] = "timestamp";
    WebhookProperty["token"] = "token";
    WebhookProperty["url"] = "url";
})(WebhookProperty || (exports.WebhookProperty = WebhookProperty = {}));
exports.WebhookProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    name: (i) => i?.name,
    type: (i) => discord_js_1.WebhookType[i?.type],
    avatar: (i) => i?.avatarURL(),
    ownerID: (i) => i?.owner?.id,
    channelID: (i) => i?.channelId,
    guildID: (i) => i?.guildId,
    sourceChannelID: (i) => i?.sourceChannel?.id,
    sourceGuildID: (i) => i?.sourceGuild?.id,
    timestamp: (i) => i?.createdTimestamp,
    token: (i) => i?.token,
    url: (i) => i?.url,
});
//# sourceMappingURL=webhook.js.map