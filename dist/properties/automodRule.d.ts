import { AutoModerationAction, AutoModerationRule } from "discord.js";
export declare enum AutomodRuleProperty {
    id = "id",
    name = "name",
    authorID = "authorID",
    enabled = "enabled",
    eventType = "eventType",
    triggerType = "triggerType",
    triggerMetadata = "triggerMetadata",
    exemptRoles = "exemptRoles",
    exemptChannels = "exemptChannels",
    actions = "actions",
    keywordFilter = "keywordFilter",
    regexPatterns = "regexPatterns",
    presets = "presets",
    allowList = "allowList",
    mentionTotalLimit = "mentionTotalLimit",
    mentionRaidProtectionEnabled = "mentionRaidProtectionEnabled"
}
export declare const AutomodRuleProperties: import("..").Properties<typeof AutomodRuleProperty, AutoModerationRule>;
export declare enum AutomodRuleActionProperty {
    type = "type",
    channelID = "channelID",
    durationSeconds = "durationSeconds",
    customMessage = "customMessage"
}
export declare const AutomodRuleActionProperties: import("..").Properties<typeof AutomodRuleActionProperty, AutoModerationAction>;
//# sourceMappingURL=automodRule.d.ts.map