"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationEmojiProperties = exports.ApplicationEmojiProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var ApplicationEmojiProperty;
(function (ApplicationEmojiProperty) {
    ApplicationEmojiProperty["authorID"] = "authorID";
    ApplicationEmojiProperty["name"] = "name";
    ApplicationEmojiProperty["id"] = "id";
    ApplicationEmojiProperty["identifier"] = "identifier";
    ApplicationEmojiProperty["requiresColons"] = "requiresColons";
    ApplicationEmojiProperty["managed"] = "managed";
    ApplicationEmojiProperty["timestamp"] = "timestamp";
    ApplicationEmojiProperty["animated"] = "animated";
    ApplicationEmojiProperty["url"] = "url";
    ApplicationEmojiProperty["format"] = "format";
})(ApplicationEmojiProperty || (exports.ApplicationEmojiProperty = ApplicationEmojiProperty = {}));
exports.ApplicationEmojiProperties = (0, defineProperties_1.default)({
    authorID: (i) => i?.author?.id,
    id: (i) => i?.id,
    identifier: (i) => i?.identifier,
    name: (i) => i?.name,
    managed: (i) => i?.managed,
    animated: (i) => i?.animated,
    url: (i) => i?.imageURL(),
    format: (i) => i?.toString(),
    requiresColons: (i) => i?.requiresColons,
    timestamp: (i) => i?.createdTimestamp
});
//# sourceMappingURL=applicationEmoji.js.map