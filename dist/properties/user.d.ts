import { User } from "discord.js";
export declare enum UserProperty {
    id = "id",
    username = "username",
    displayName = "displayName",
    globalName = "globalName",
    badges = "badges",
    avatar = "avatar",
    accentColor = "accentColor",
    banner = "banner",
    timestamp = "timestamp",
    dmChannelID = "dmChannelID"
}
export declare const UserProperties: import("../functions/defineProperties").Properties<typeof UserProperty, User>;
//# sourceMappingURL=user.d.ts.map