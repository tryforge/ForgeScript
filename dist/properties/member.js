"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberProperties = exports.MemberProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var MemberProperty;
(function (MemberProperty) {
    MemberProperty["nickname"] = "nickname";
    MemberProperty["displayName"] = "displayName";
    MemberProperty["displayColor"] = "displayColor";
    MemberProperty["roles"] = "roles";
    MemberProperty["mention"] = "mention";
    MemberProperty["avatar"] = "avatar";
    MemberProperty["bannable"] = "bannable";
    MemberProperty["kickable"] = "kickable";
    MemberProperty["guildID"] = "guildID";
    MemberProperty["id"] = "id";
    MemberProperty["manageable"] = "manageable";
    MemberProperty["timeout"] = "timeout";
    MemberProperty["timedOutUntil"] = "timedOutUntil";
    MemberProperty["status"] = "status";
    MemberProperty["addedRoles"] = "addedRoles";
    MemberProperty["roleCount"] = "roleCount";
    MemberProperty["removedRoles"] = "removedRoles";
    MemberProperty["platform"] = "platform";
    MemberProperty["timestamp"] = "timestamp";
    MemberProperty["boosting"] = "boosting";
    MemberProperty["boostingSince"] = "boostingSince";
})(MemberProperty || (exports.MemberProperty = MemberProperty = {}));
exports.MemberProperties = (0, defineProperties_1.default)({
    timestamp: (i) => i?.joinedTimestamp,
    displayColor: (i) => i?.displayHexColor,
    mention: (i) => (0, discord_js_1.userMention)(i?.id),
    displayName: (i) => i?.displayName,
    // Assuming m is old state
    addedRoles: (m, sep) => m?.guild.members.cache
        .get(m.id)
        ?.roles.cache.filter((r) => !m.roles.cache.has(r.id))
        .map((x) => x.id)
        .join(sep ?? ", "),
    // Assuming m is old state
    removedRoles: (m, sep) => {
        const updated = m?.guild.members.cache.get(m.id);
        return m?.roles.cache
            .filter((r) => !updated?.roles.cache.has(r.id))
            .map((x) => x.id)
            .join(sep ?? ", ");
    },
    roleCount: (m) => m?.roles.cache.size ?? 0,
    avatar: (i) => i?.displayAvatarURL(),
    nickname: (i) => i?.nickname,
    roles: (i, sep) => i?.roles.cache.map((x) => x.id).join(sep || ", "),
    bannable: (i) => i?.bannable ?? false,
    kickable: (i) => i?.kickable ?? false,
    manageable: (i) => i?.manageable ?? false,
    id: (i) => i?.id,
    guildID: (i) => i?.guild.id,
    timedOutUntil: (i) => (i?.isCommunicationDisabled() ? i.communicationDisabledUntil.getTime() : 0),
    timeout: (i) => i?.isCommunicationDisabled() ?? false,
    status: (i) => i?.presence?.status,
    platform: (i, sep) => Object.keys(i?.presence?.clientStatus ?? {}).join(sep || ", "),
    boosting: (i) => i?.premiumSinceTimestamp !== null,
    boostingSince: (i) => i?.premiumSinceTimestamp ?? 0,
});
//# sourceMappingURL=member.js.map