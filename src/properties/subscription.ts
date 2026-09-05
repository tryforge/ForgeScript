/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Subscription, SubscriptionStatus } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum SubscriptionProperty {
    id = "id",
    userID = "userID",
    status = "status",
    country = "country",
    skuIDs = "skuIDs",
    renewalSkuIDs = "renewalSkuIDs",
    entitlementIDs = "entitlementIDs",
    canceledTimestamp = "canceledTimestamp",
    periodEndTimestamp = "periodEndTimestamp",
    periodStartTimestamp = "periodStartTimestamp",
}

export const SubscriptionProperties = defineProperties<typeof SubscriptionProperty, Subscription>({
    id: (i) => i?.id,
    userID: (i) => i?.userId,
    status: (i) => SubscriptionStatus[i?.status!],
    country: (i) => i?.country,
    skuIDs: (i, sep) => i?.skuIds.join(sep ?? ", "),
    renewalSkuIDs: (i, sep) => i?.renewalSkuIds?.join(sep ?? ", "),
    entitlementIDs: (i, sep) => i?.entitlementIds.join(sep ?? ", "),
    canceledTimestamp: (i) => i?.canceledTimestamp,
    periodEndTimestamp: (i) => i?.currentPeriodEndTimestamp,
    periodStartTimestamp: (i) => i?.currentPeriodStartTimestamp,
})