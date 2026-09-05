"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionProperties = exports.SubscriptionProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var SubscriptionProperty;
(function (SubscriptionProperty) {
    SubscriptionProperty["id"] = "id";
    SubscriptionProperty["userID"] = "userID";
    SubscriptionProperty["status"] = "status";
    SubscriptionProperty["country"] = "country";
    SubscriptionProperty["skuIDs"] = "skuIDs";
    SubscriptionProperty["renewalSkuIDs"] = "renewalSkuIDs";
    SubscriptionProperty["entitlementIDs"] = "entitlementIDs";
    SubscriptionProperty["canceledTimestamp"] = "canceledTimestamp";
    SubscriptionProperty["periodEndTimestamp"] = "periodEndTimestamp";
    SubscriptionProperty["periodStartTimestamp"] = "periodStartTimestamp";
})(SubscriptionProperty || (exports.SubscriptionProperty = SubscriptionProperty = {}));
exports.SubscriptionProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    userID: (i) => i?.userId,
    status: (i) => discord_js_1.SubscriptionStatus[i?.status],
    country: (i) => i?.country,
    skuIDs: (i, sep) => i?.skuIds.join(sep ?? ", "),
    renewalSkuIDs: (i, sep) => i?.renewalSkuIds?.join(sep ?? ", "),
    entitlementIDs: (i, sep) => i?.entitlementIds.join(sep ?? ", "),
    canceledTimestamp: (i) => i?.canceledTimestamp,
    periodEndTimestamp: (i) => i?.currentPeriodEndTimestamp,
    periodStartTimestamp: (i) => i?.currentPeriodStartTimestamp,
});
//# sourceMappingURL=subscription.js.map