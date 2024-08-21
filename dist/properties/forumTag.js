"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumTagProperties = exports.ForumTagProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var ForumTagProperty;
(function (ForumTagProperty) {
    ForumTagProperty["emoji"] = "emoji";
    ForumTagProperty["id"] = "id";
    ForumTagProperty["moderated"] = "moderated";
    ForumTagProperty["name"] = "name";
})(ForumTagProperty || (exports.ForumTagProperty = ForumTagProperty = {}));
exports.ForumTagProperties = (0, defineProperties_1.default)({
    emoji: (i) => i && "emoji" in i
        ? i.emoji?.id
            ? `<:${i.emoji?.name}:${i.emoji?.id}>`
            : i.emoji?.name
        : null,
    id: (i) => i?.id,
    moderated: (i) => i?.moderated,
    name: (i) => i?.name,
});
//# sourceMappingURL=forumTag.js.map