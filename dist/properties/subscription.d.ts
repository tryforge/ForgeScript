import { Subscription } from "discord.js";
export declare enum SubscriptionProperty {
    id = "id",
    userID = "userID",
    status = "status",
    country = "country",
    skuIDs = "skuIDs",
    renewalSkuIDs = "renewalSkuIDs",
    entitlementIDs = "entitlementIDs",
    canceledTimestamp = "canceledTimestamp",
    periodEndTimestamp = "periodEndTimestamp",
    periodStartTimestamp = "periodStartTimestamp"
}
export declare const SubscriptionProperties: import("..").Properties<typeof SubscriptionProperty, Subscription>;
//# sourceMappingURL=subscription.d.ts.map