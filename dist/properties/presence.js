"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresenceProperties = exports.PresenceProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var PresenceProperty;
(function (PresenceProperty) {
    PresenceProperty["id"] = "id";
    PresenceProperty["guildID"] = "guildID";
    PresenceProperty["status"] = "status";
    PresenceProperty["platform"] = "platform";
})(PresenceProperty || (exports.PresenceProperty = PresenceProperty = {}));
exports.PresenceProperties = (0, defineProperties_1.default)({
    id: i => i?.userId,
    status: i => i?.status,
    guildID: i => i?.guild?.id,
    platform: (i, sep) => Object.keys(i?.clientStatus ?? {}).join(sep ?? ", ")
});
//# sourceMappingURL=presence.js.map