"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitlementProperties = exports.EntitlementProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var EntitlementProperty;
(function (EntitlementProperty) {
    EntitlementProperty["userID"] = "userID";
    EntitlementProperty["consumed"] = "consumed";
    EntitlementProperty["guildId"] = "guildId";
    EntitlementProperty["id"] = "id";
    EntitlementProperty["skuID"] = "skuID";
    EntitlementProperty["type"] = "type";
    EntitlementProperty["endTimestamp"] = "endTimestamp";
    EntitlementProperty["startTimestamp"] = "startTimestamp";
    EntitlementProperty["active"] = "active";
    EntitlementProperty["test"] = "test";
    EntitlementProperty["guildSubscription"] = "guildSubscription";
    EntitlementProperty["userSubscription"] = "userSubscription";
})(EntitlementProperty || (exports.EntitlementProperty = EntitlementProperty = {}));
exports.EntitlementProperties = (0, defineProperties_1.default)({
    skuID: (i) => i?.skuId,
    type: (i) => discord_js_1.EntitlementType[i?.type],
    id: (i) => i?.id,
    active: i => i?.isActive(),
    test: i => i?.isTest(),
    guildSubscription: i => i?.isGuildSubscription(),
    userSubscription: i => i?.isUserSubscription(),
    userID: (i, sep) => i?.userId,
    consumed: (i, sep) => i?.consumed,
    guildId: (i, sep) => i?.guildId,
    endTimestamp: (i, sep) => i?.endsTimestamp,
    startTimestamp: (i, sep) => i?.startsTimestamp,
});
//# sourceMappingURL=entitlement.js.map