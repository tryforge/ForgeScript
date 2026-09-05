"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleProperties = exports.RoleProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
const hex_1 = require("../functions/hex");
var RoleProperty;
(function (RoleProperty) {
    RoleProperty["id"] = "id";
    RoleProperty["name"] = "name";
    RoleProperty["icon"] = "icon";
    RoleProperty["color"] = "color";
    RoleProperty["hoisted"] = "hoisted";
    RoleProperty["managed"] = "managed";
    RoleProperty["mentionable"] = "mentionable";
    RoleProperty["rawPosition"] = "rawPosition";
    RoleProperty["position"] = "position";
    RoleProperty["timestamp"] = "timestamp";
    RoleProperty["permissions"] = "permissions";
    RoleProperty["tags"] = "tags";
    RoleProperty["members"] = "members";
    RoleProperty["unicodeEmoji"] = "unicodeEmoji";
    RoleProperty["secondaryColor"] = "secondaryColor";
    RoleProperty["tertiaryColor"] = "tertiaryColor";
})(RoleProperty || (exports.RoleProperty = RoleProperty = {}));
exports.RoleProperties = (0, defineProperties_1.default)({
    timestamp: (i) => i?.createdTimestamp,
    id: (i) => i?.id,
    name: (i) => i?.name,
    icon: (i) => i?.icon,
    color: (i) => i?.hexColor,
    hoisted: (i) => i?.hoist,
    managed: (i) => i?.managed,
    members: (i, sep) => i?.members.map((x) => x.id).join(sep || ", "),
    mentionable: (i) => i?.mentionable,
    position: (i) => i?.position,
    rawPosition: (i) => i?.rawPosition,
    permissions: (i, sep) => i?.permissions.toArray().join(sep || ", "),
    tags: (i, sep) => Object.keys(i?.tags ?? {}).join(sep || ", "),
    unicodeEmoji: (i) => i?.unicodeEmoji,
    secondaryColor: (i) => i?.colors.secondaryColor ? "#" + (0, hex_1.int2hex)(i?.colors.secondaryColor) : null,
    tertiaryColor: (i) => i?.colors.tertiaryColor ? "#" + (0, hex_1.int2hex)(i?.colors.tertiaryColor) : null,
});
//# sourceMappingURL=role.js.map