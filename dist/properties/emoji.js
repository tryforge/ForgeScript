"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmojiProperties = exports.EmojiProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var EmojiProperty;
(function (EmojiProperty) {
    EmojiProperty["guildID"] = "guildID";
    EmojiProperty["name"] = "name";
    EmojiProperty["id"] = "id";
    EmojiProperty["identifier"] = "identifier";
    EmojiProperty["requiresColons"] = "requiresColons";
    EmojiProperty["roles"] = "roles";
    EmojiProperty["managed"] = "managed";
    EmojiProperty["timestamp"] = "timestamp";
    EmojiProperty["animated"] = "animated";
    EmojiProperty["url"] = "url";
    EmojiProperty["format"] = "format";
})(EmojiProperty || (exports.EmojiProperty = EmojiProperty = {}));
exports.EmojiProperties = (0, defineProperties_1.default)({
    guildID: (i) => i?.guild.id,
    id: (i) => i?.id,
    identifier: (i) => i?.identifier,
    name: (i) => i?.name,
    managed: (i) => i?.managed,
    animated: (i) => i?.animated,
    url: (i) => i?.url,
    format: (i) => i?.toString(),
    requiresColons: (i) => i?.requiresColons,
    timestamp: (i) => i?.createdTimestamp,
    roles: (i, sep) => i?.roles.cache.map((x) => x.id).join(sep || ", "),
});
//# sourceMappingURL=emoji.js.map