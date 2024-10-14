"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionOverwritesProperties = exports.PermissionOverwritesProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var PermissionOverwritesProperty;
(function (PermissionOverwritesProperty) {
    PermissionOverwritesProperty["id"] = "id";
    PermissionOverwritesProperty["type"] = "type";
    PermissionOverwritesProperty["allow"] = "allow";
    PermissionOverwritesProperty["deny"] = "deny";
})(PermissionOverwritesProperty || (exports.PermissionOverwritesProperty = PermissionOverwritesProperty = {}));
exports.PermissionOverwritesProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    type: (i) => discord_js_1.OverwriteType[i?.type],
    allow: (i, sep) => i?.allow.toArray().join(sep ?? ", "),
    deny: (i, sep) => i?.deny.toArray().join(sep ?? ", "),
});
//# sourceMappingURL=permissionOverwrites.js.map