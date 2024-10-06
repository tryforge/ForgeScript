import { AutoModerationRule, AutoModerationRuleEventType, AutoModerationRuleKeywordPresetType, AutoModerationRuleTriggerType } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum AutomodRuleProperty {
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

export const AutomodRuleProperties = defineProperties<typeof AutomodRuleProperty, AutoModerationRule>({
    id: (i) => i?.id,
    name: (i) => i?.name,
    authorID: (i) => i?.creatorId,
    enabled: (i) => i?.enabled,
    eventType: (i) => AutoModerationRuleEventType[i?.eventType!],
    exemptChannels: (i, sep) => i?.exemptChannels?.map((x) => x.id).join(sep ?? ", "),
    exemptRoles: (i, sep) => i?.exemptRoles?.map((x) => x.id).join(sep ?? ", "),
    triggerType: (i) => AutoModerationRuleTriggerType[i?.triggerType!],
    actions: (i) => Object(i?.actions),
    triggerMetadata: (i) => Object(i?.triggerMetadata),
    keywordFilter: (i, sep) => i?.triggerMetadata.keywordFilter.join(sep ?? ", "),
    regexPatterns: (i, sep) => i?.triggerMetadata.regexPatterns.join(sep ?? ", "),
    presets: (i, sep) => i?.triggerMetadata.presets.map((x) => AutoModerationRuleKeywordPresetType[x]).join(sep ?? ", "),
    allowList: (i, sep) => i?.triggerMetadata.allowList.join(sep ?? ", "),
    mentionTotalLimit: (i) => i?.triggerMetadata.mentionTotalLimit,
    mentionRaidProtectionEnabled: (i) => i?.triggerMetadata.mentionRaidProtectionEnabled
})