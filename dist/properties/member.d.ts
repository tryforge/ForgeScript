import { APIInteractionGuildMember, GuildMember } from "discord.js";
export declare enum MemberProperty {
    nickname = "nickname",
    displayName = "displayName",
    displayColor = "displayColor",
    roles = "roles",
    flags = "flags",
    mention = "mention",
    avatar = "avatar",
    banner = "banner",
    bannable = "bannable",
    kickable = "kickable",
    guildID = "guildID",
    id = "id",
    manageable = "manageable",
    timeout = "timeout",
    timedOutUntil = "timedOutUntil",
    status = "status",
    addedRoles = "addedRoles",
    roleCount = "roleCount",
    removedRoles = "removedRoles",
    platform = "platform",
    timestamp = "timestamp",
    boosting = "boosting",
    boostingSince = "boostingSince",
    permissions = "permissions"
}
export declare const MemberProperties: import("../functions/defineProperties").Properties<typeof MemberProperty, GuildMember | APIInteractionGuildMember>;
//# sourceMappingURL=member.d.ts.map