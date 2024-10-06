import { AutoModerationRule } from "discord.js";
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
export declare const AutomodRuleProperties: import("../functions/defineProperties").Properties<typeof AutomodRuleProperty, AutoModerationRule>;
//# sourceMappingURL=automodRule.d.ts.map