/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { GuildScheduledEvent, GuildScheduledEventEntityType, GuildScheduledEventPrivacyLevel, GuildScheduledEventStatus } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum ScheduledEventProperty {
    id = "id",
    userID = "userID",
    guildID = "guildID",
    channelID = "channelID",
    name = "name",
    userCount = "userCount",
    description = "description",
    startTimestamp = "startTimestamp",
    endTimestamp = "endTimestamp",
    timestamp = "timestamp",
    url = "url",
    cover = "cover",
    entityID = "entityID",
    location = "location",
    entityType = "entityType",
    privacyLevel = "privacyLevel",
    status = "status"
}

export const ScheduledEventProperties = defineProperties<typeof ScheduledEventProperty, GuildScheduledEvent>({
    channelID: i => i?.channelId,
    guildID: i => i?.guildId,
    id: i => i?.id,
    name: i => i?.name,
    userID: i => i?.creatorId,
    userCount: i => i?.userCount,
    description: i => i?.description,
    startTimestamp: i => i?.scheduledStartTimestamp,
    endTimestamp: i => i?.scheduledEndTimestamp,
    timestamp: i => i?.createdTimestamp,
    url: i => i?.url,
    cover: i => i?.coverImageURL(),
    entityID: i => i?.entityId,
    location: i => i?.entityMetadata?.location,
    entityType: i => GuildScheduledEventEntityType[i?.entityType!],
    privacyLevel: i => GuildScheduledEventPrivacyLevel[i?.privacyLevel!],
    status: i => GuildScheduledEventStatus[i?.status!]
})