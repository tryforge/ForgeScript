"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleProperties = exports.RoleProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var RoleProperty;
(function (RoleProperty) {
    RoleProperty["timestamp"] = "timestamp";
    RoleProperty["id"] = "id";
    RoleProperty["color"] = "color";
    RoleProperty["hoisted"] = "hoisted";
    RoleProperty["mentionable"] = "mentionable";
    RoleProperty["rawPosition"] = "rawPosition";
    RoleProperty["position"] = "position";
    RoleProperty["permissions"] = "permissions";
    RoleProperty["tags"] = "tags";
    RoleProperty["members"] = "members";
})(RoleProperty || (exports.RoleProperty = RoleProperty = {}));
exports.RoleProperties = (0, defineProperties_1.default)({
    timestamp: (i) => i?.createdTimestamp,
    id: (i) => i?.id,
    color: (i) => i?.hexColor,
    hoisted: (i) => i?.hoist,
    members: (i, sep) => i?.members.map((x) => x.id).join(sep || ", "),
    mentionable: (i) => i?.mentionable,
    position: (i) => i?.position,
    rawPosition: (i) => i?.rawPosition,
    permissions: (i, sep) => i?.permissions.toArray().join(sep || ", "),
    tags: (i, sep) => Object.keys(i?.tags ?? {}).join(sep || ", "),
});
//# sourceMappingURL=role.js.map