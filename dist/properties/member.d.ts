import { GuildMember } from "discord.js";
export declare enum MemberProperty {
    nickname = "nickname",
    displayName = "displayName",
    displayColor = "displayColor",
    roles = "roles",
    avatar = "avatar",
    bannable = "bannable",
    kickable = "kickable",
    guildID = "guildID",
    id = "id",
    manageable = "manageable",
    timeout = "timeout",
    timedOutUntil = "timedOutUntil",
    status = "status",
    addedRoles = "addedRoles",
    removedRoles = "removedRoles",
    platform = "platform",
    timestamp = "timestamp",
    boosting = "boosting",
    boostingSince = "boostingSince"
}
export declare const MemberProperties: import("../functions/defineProperties").Properties<typeof MemberProperty, GuildMember>;
//# sourceMappingURL=member.d.ts.map