import { Channel, ChannelType, Collection, GuildMember } from "discord.js"
import defineProperties from "../functions/defineProperties"
import { IStates, States } from "../core"

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
    entityType = "entityType"
}

export const ScheduledEventProperties = defineProperties<typeof ScheduledEventProperty, IStates["scheduledEvent"]>({
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
    entityType: i => i?.entityType
})
