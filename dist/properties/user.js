"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProperties = exports.UserProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var UserProperty;
(function (UserProperty) {
    UserProperty["id"] = "id";
    UserProperty["username"] = "username";
    UserProperty["displayName"] = "displayName";
    UserProperty["globalName"] = "globalName";
    UserProperty["badges"] = "badges";
    UserProperty["avatar"] = "avatar";
    UserProperty["accentColor"] = "accentColor";
    UserProperty["banner"] = "banner";
    UserProperty["timestamp"] = "timestamp";
    UserProperty["dmChannelID"] = "dmChannelID";
})(UserProperty || (exports.UserProperty = UserProperty = {}));
exports.UserProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    avatar: (i) => i?.displayAvatarURL(),
    badges: (i, sep) => i?.flags?.toArray().join(sep || ", "),
    displayName: (i) => i?.displayName,
    globalName: (i) => i?.globalName,
    username: (i) => i?.username,
    banner: (i) => i?.bannerURL(),
    accentColor: (i) => i?.hexAccentColor,
    timestamp: (i) => i?.createdTimestamp,
    dmChannelID: (i) => i?.dmChannel?.id,
});
//# sourceMappingURL=user.js.map