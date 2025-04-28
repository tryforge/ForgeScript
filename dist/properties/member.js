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
    MemberProperty["flags"] = "flags";
    MemberProperty["mention"] = "mention";
    MemberProperty["avatar"] = "avatar";
    MemberProperty["banner"] = "banner";
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
    MemberProperty["permissions"] = "permissions";
})(MemberProperty || (exports.MemberProperty = MemberProperty = {}));
exports.MemberProperties = (0, defineProperties_1.default)({
    timestamp: (i) => i instanceof discord_js_1.GuildMember ? i?.joinedTimestamp : (i?.joined_at ? new Date(i.joined_at).getTime() : null),
    displayColor: (i) => i?.displayHexColor,
    mention: (i) => i?.user ? (0, discord_js_1.userMention)(i.user.id) : null,
    displayName: (i) => i instanceof discord_js_1.GuildMember ? i?.displayName : i?.nick,
    // Assuming m is old state
    addedRoles: (m, sep) => {
        if (!(m && "guild" in m))
            return null;
        return m?.guild.members.cache
            .get(m.id)
            ?.roles.cache.filter((r) => !m.roles.cache.has(r.id))
            .map((x) => x.id)
            .join(sep ?? ", ");
    },
    // Assuming m is old state
    removedRoles: (m, sep) => {
        if (!(m && "guild" in m))
            return null;
        const updated = m?.guild.members.cache.get(m.id);
        return m?.roles.cache
            .filter((r) => !updated?.roles.cache.has(r.id))
            .map((x) => x.id)
            .join(sep ?? ", ");
    },
    roleCount: (i) => (i instanceof discord_js_1.GuildMember ? i?.roles.cache.size : i?.roles.length) ?? 0,
    avatar: (i) => i instanceof discord_js_1.GuildMember ? i.displayAvatarURL() : (i?.user && (i?.avatar ?? i.user.avatar) ? new discord_js_1.CDN().avatar(i.user.id, i.avatar ?? i.user.avatar) : null),
    banner: (i) => i instanceof discord_js_1.GuildMember ? i.displayBannerURL() : (i?.user && (i?.banner ?? i.user.banner) ? new discord_js_1.CDN().banner(i.user.id, i.banner ?? i.user.banner) : null),
    nickname: (i) => i instanceof discord_js_1.GuildMember ? i?.nickname : i?.nick,
    roles: (i, sep) => (i instanceof discord_js_1.GuildMember ? i?.roles.cache.map((x) => x.id) : i?.roles)?.join(sep || ", "),
    flags: (i, sep) => new discord_js_1.GuildMemberFlagsBitField(i?.flags).toArray().join(sep || ", "),
    permissions: (i, sep) => new discord_js_1.PermissionsBitField(i?.permissions).toArray().join(sep || ", "),
    bannable: (i) => i?.bannable ?? false,
    kickable: (i) => i?.kickable ?? false,
    manageable: (i) => i?.manageable ?? false,
    id: (i) => i?.user?.id,
    guildID: (i) => i?.guild?.id,
    timedOutUntil: (i) => i instanceof discord_js_1.GuildMember ? (i?.isCommunicationDisabled() ? i.communicationDisabledUntil.getTime() : 0) : (i?.communication_disabled_until ? new Date(i.communication_disabled_until).getTime() : 0),
    timeout: (i) => i instanceof discord_js_1.GuildMember ? (i?.isCommunicationDisabled() ?? false) : !!i?.communication_disabled_until,
    status: (i) => i?.presence?.status,
    platform: (i, sep) => Object.keys(i?.presence?.clientStatus ?? {}).join(sep || ", "),
    boosting: (i) => (i instanceof discord_js_1.GuildMember ? i?.premiumSinceTimestamp : i?.premium_since) != null,
    boostingSince: (i) => i instanceof discord_js_1.GuildMember ? i?.premiumSinceTimestamp ?? 0 : (i?.premium_since ? new Date(i.premium_since).getTime() : 0),
});
//# sourceMappingURL=member.js.map