"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomodRuleActionProperties = exports.AutomodRuleActionProperty = exports.AutomodRuleProperties = exports.AutomodRuleProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var AutomodRuleProperty;
(function (AutomodRuleProperty) {
    AutomodRuleProperty["id"] = "id";
    AutomodRuleProperty["name"] = "name";
    AutomodRuleProperty["authorID"] = "authorID";
    AutomodRuleProperty["enabled"] = "enabled";
    AutomodRuleProperty["eventType"] = "eventType";
    AutomodRuleProperty["triggerType"] = "triggerType";
    AutomodRuleProperty["triggerMetadata"] = "triggerMetadata";
    AutomodRuleProperty["exemptRoles"] = "exemptRoles";
    AutomodRuleProperty["exemptChannels"] = "exemptChannels";
    AutomodRuleProperty["actions"] = "actions";
    AutomodRuleProperty["keywordFilter"] = "keywordFilter";
    AutomodRuleProperty["regexPatterns"] = "regexPatterns";
    AutomodRuleProperty["presets"] = "presets";
    AutomodRuleProperty["allowList"] = "allowList";
    AutomodRuleProperty["mentionTotalLimit"] = "mentionTotalLimit";
    AutomodRuleProperty["mentionRaidProtectionEnabled"] = "mentionRaidProtectionEnabled";
})(AutomodRuleProperty || (exports.AutomodRuleProperty = AutomodRuleProperty = {}));
exports.AutomodRuleProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    name: (i) => i?.name,
    authorID: (i) => i?.creatorId,
    enabled: (i) => i?.enabled,
    eventType: (i) => discord_js_1.AutoModerationRuleEventType[i?.eventType],
    exemptChannels: (i, sep) => i?.exemptChannels?.map((x) => x.id).join(sep ?? ", "),
    exemptRoles: (i, sep) => i?.exemptRoles?.map((x) => x.id).join(sep ?? ", "),
    triggerType: (i) => discord_js_1.AutoModerationRuleTriggerType[i?.triggerType],
    actions: (i) => JSON.stringify(i?.actions, undefined, 4),
    triggerMetadata: (i) => JSON.stringify(i?.triggerMetadata, undefined, 4),
    keywordFilter: (i, sep) => i?.triggerMetadata.keywordFilter.join(sep ?? ", "),
    regexPatterns: (i, sep) => i?.triggerMetadata.regexPatterns.join(sep ?? ", "),
    presets: (i, sep) => i?.triggerMetadata.presets.map((x) => discord_js_1.AutoModerationRuleKeywordPresetType[x]).join(sep ?? ", "),
    allowList: (i, sep) => i?.triggerMetadata.allowList.join(sep ?? ", "),
    mentionTotalLimit: (i) => i?.triggerMetadata.mentionTotalLimit,
    mentionRaidProtectionEnabled: (i) => i?.triggerMetadata.mentionRaidProtectionEnabled
});
var AutomodRuleActionProperty;
(function (AutomodRuleActionProperty) {
    AutomodRuleActionProperty["type"] = "type";
    AutomodRuleActionProperty["channelID"] = "channelID";
    AutomodRuleActionProperty["durationSeconds"] = "durationSeconds";
    AutomodRuleActionProperty["customMessage"] = "customMessage";
})(AutomodRuleActionProperty || (exports.AutomodRuleActionProperty = AutomodRuleActionProperty = {}));
exports.AutomodRuleActionProperties = (0, defineProperties_1.default)({
    type: (i) => discord_js_1.AutoModerationActionType[i?.type],
    channelID: (i) => i?.metadata.channelId,
    durationSeconds: (i) => i?.metadata.durationSeconds,
    customMessage: (i) => i?.metadata.customMessage,
});
//# sourceMappingURL=automodRule.js.map