/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { StageInstance, StageInstancePrivacyLevel } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum StageProperty {
    channelID = "channelID",
    id = "id",
    topic = "topic",
    timestamp = "timestamp",
    guildID = "guildID",
    privacyLevel = "privacyLevel",
    eventId = "eventId"
}

export const StageProperties = defineProperties<typeof StageProperty, StageInstance>({
    id: i => i?.id,
    channelID: i => i?.channelId,
    guildID: i => i?.guildId,
    topic: i => i?.topic,
    timestamp: i => i?.createdTimestamp,
    privacyLevel: i => StageInstancePrivacyLevel[i?.privacyLevel!],
    eventId: i => i?.guildScheduledEventId
})