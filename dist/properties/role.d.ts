import { Role } from "discord.js";
export declare enum RoleProperty {
    timestamp = "timestamp",
    id = "id",
    color = "color",
    hoisted = "hoisted",
    mentionable = "mentionable",
    rawPosition = "rawPosition",
    position = "position",
    permissions = "permissions",
    tags = "tags",
    members = "members"
}
export declare const RoleProperties: import("../functions/defineProperties").Properties<typeof RoleProperty, Role>;
//# sourceMappingURL=role.d.ts.map