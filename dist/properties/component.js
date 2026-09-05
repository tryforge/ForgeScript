"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentProperties = exports.ComponentProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var ComponentProperty;
(function (ComponentProperty) {
    ComponentProperty["id"] = "id";
    ComponentProperty["type"] = "type";
    ComponentProperty["customID"] = "customID";
    ComponentProperty["label"] = "label";
    ComponentProperty["style"] = "style";
    ComponentProperty["url"] = "url";
    ComponentProperty["disabled"] = "disabled";
    ComponentProperty["maxValues"] = "maxValues";
    ComponentProperty["minValues"] = "minValues";
    ComponentProperty["optionCount"] = "optionCount";
    ComponentProperty["options"] = "options";
    ComponentProperty["optionNames"] = "optionNames";
    ComponentProperty["emoji"] = "emoji";
    ComponentProperty["optionDescriptions"] = "optionDescriptions";
    ComponentProperty["optionValues"] = "optionValues";
    ComponentProperty["content"] = "content";
    ComponentProperty["accentColor"] = "accentColor";
    ComponentProperty["spoiler"] = "spoiler";
    ComponentProperty["divider"] = "divider";
    ComponentProperty["spacing"] = "spacing";
    ComponentProperty["items"] = "items";
    ComponentProperty["itemUrls"] = "itemUrls";
    ComponentProperty["fileUrl"] = "fileUrl";
    ComponentProperty["accessory"] = "accessory";
    ComponentProperty["components"] = "components";
    ComponentProperty["thumbnailUrl"] = "thumbnailUrl";
})(ComponentProperty || (exports.ComponentProperty = ComponentProperty = {}));
exports.ComponentProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    type: (i) => discord_js_1.ComponentType[i?.type],
    customID: (i) => (i && "customId" in i ? i.customId : null),
    emoji: (i) => i && "emoji" in i
        ? i.emoji?.id
            ? `<${i.emoji?.animated ? "a" : ""}:${i.emoji?.name}:${i.emoji?.id}>`
            : i.emoji?.name
        : null,
    label: (i) => (i && "label" in i ? i.label : null),
    style: (i) => (i && "style" in i ? discord_js_1.ButtonStyle[i.style] : null),
    disabled: (i) => (i && "disabled" in i ? i.disabled : null),
    url: (i) => (i && "url" in i ? i.url : null),
    maxValues: (i) => (i && "maxValues" in i ? i.maxValues : null),
    minValues: (i) => (i && "minValues" in i ? i.minValues : null),
    optionCount: (i) => (i && "options" in i ? i.options.length : null),
    optionNames: (i, sep) => (i && "options" in i ? i.options.map((x) => x.label).join(sep ?? ", ") : null),
    optionDescriptions: (i, sep) => i && "options" in i ? i.options.map((x) => x.description).join(sep ?? ", ") : null,
    optionValues: (i, sep) => (i && "options" in i ? i.options.map((x) => x.value).join(sep ?? ", ") : null),
    options: (i) => (i && "options" in i ? JSON.stringify(i.options, undefined, 4) : null),
    content: (i) => (i && "content" in i ? i.content : null),
    accentColor: (i) => (i && "hexAccentColor" in i ? i.hexAccentColor : null),
    spoiler: (i) => (i && "spoiler" in i ? i.spoiler : null),
    divider: (i) => (i && "divider" in i ? i.divider : null),
    spacing: (i) => (i && "spacing" in i ? discord_js_1.SeparatorSpacingSize[i.spacing] : null),
    items: (i) => (i && "items" in i ? JSON.stringify(i.items, undefined, 4) : null),
    itemUrls: (i, sep) => (i && "items" in i ? i.items.map((x) => x.media.url).join(sep ?? ", ") : null),
    fileUrl: (i) => (i && "file" in i ? i.file.url : null),
    accessory: (i) => (i && "accessory" in i ? JSON.stringify(i.accessory, undefined, 4) : null),
    components: (i) => (i && "components" in i ? JSON.stringify(i.components, undefined, 4) : null),
    thumbnailUrl: (i) => (i instanceof discord_js_1.ThumbnailComponent ? i.media.url : null),
});
//# sourceMappingURL=component.js.map