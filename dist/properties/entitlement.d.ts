import { Entitlement } from "discord.js";
export declare enum EntitlementProperty {
    userID = "userID",
    consumed = "consumed",
    guildId = "guildId",
    id = "id",
    skuID = "skuID",
    type = "type",
    endTimestamp = "endTimestamp",
    startTimestamp = "startTimestamp",
    active = "active",
    test = "test",
    guildSubscription = "guildSubscription",
    userSubscription = "userSubscription"
}
export declare const EntitlementProperties: import("../functions/defineProperties").Properties<typeof EntitlementProperty, Entitlement>;
//# sourceMappingURL=entitlement.d.ts.map