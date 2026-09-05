/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { AutoModerationAction, AutoModerationActionType, AutoModerationRule, AutoModerationRuleEventType, AutoModerationRuleKeywordPresetType, AutoModerationRuleTriggerType } from "discord.js"
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
    actions: (i) => JSON.stringify(i?.actions, undefined, 4),
    triggerMetadata: (i) => JSON.stringify(i?.triggerMetadata, undefined, 4),
    keywordFilter: (i, sep) => i?.triggerMetadata.keywordFilter.join(sep ?? ", "),
    regexPatterns: (i, sep) => i?.triggerMetadata.regexPatterns.join(sep ?? ", "),
    presets: (i, sep) => i?.triggerMetadata.presets.map((x) => AutoModerationRuleKeywordPresetType[x]).join(sep ?? ", "),
    allowList: (i, sep) => i?.triggerMetadata.allowList.join(sep ?? ", "),
    mentionTotalLimit: (i) => i?.triggerMetadata.mentionTotalLimit,
    mentionRaidProtectionEnabled: (i) => i?.triggerMetadata.mentionRaidProtectionEnabled
})

export enum AutomodRuleActionProperty {
    type = "type",
    channelID = "channelID",
    durationSeconds = "durationSeconds",
    customMessage = "customMessage",
}

export const AutomodRuleActionProperties = defineProperties<typeof AutomodRuleActionProperty, AutoModerationAction>({
    type: (i) => AutoModerationActionType[i?.type!],
    channelID: (i) => i?.metadata.channelId,
    durationSeconds: (i) => i?.metadata.durationSeconds,
    customMessage: (i) => i?.metadata.customMessage,
})