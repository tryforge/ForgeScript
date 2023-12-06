"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedProperties = exports.EmbedProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var EmbedProperty;
(function (EmbedProperty) {
    EmbedProperty["title"] = "title";
    EmbedProperty["titleURL"] = "titleURL";
    EmbedProperty["authorName"] = "authorName";
    EmbedProperty["authorIcon"] = "authorIcon";
    EmbedProperty["footerText"] = "footerText";
    EmbedProperty["image"] = "image";
    EmbedProperty["thumbnail"] = "thumbnail";
    EmbedProperty["footerIcon"] = "footerIcon";
    EmbedProperty["description"] = "description";
    EmbedProperty["timestamp"] = "timestamp";
    EmbedProperty["authorURL"] = "authorURL";
    EmbedProperty["color"] = "color";
})(EmbedProperty || (exports.EmbedProperty = EmbedProperty = {}));
exports.EmbedProperties = (0, defineProperties_1.default)({
    authorIcon: (i) => i?.data.author?.icon_url,
    authorURL: i => i?.data.author?.url,
    titleURL: i => i?.data.url,
    color: i => i?.data.color,
    authorName: (i) => i?.data.author?.name,
    description: (i) => i?.data.description,
    footerIcon: (i) => i?.data.footer?.icon_url,
    footerText: (i) => i?.data.footer?.text,
    image: (i) => i?.data.image?.url,
    thumbnail: (i) => i?.data.thumbnail?.url,
    timestamp: (i) => i?.data.timestamp,
    title: (i) => i?.data.title,
});
//# sourceMappingURL=embed.js.map