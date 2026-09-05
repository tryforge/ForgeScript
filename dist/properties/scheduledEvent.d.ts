import { GuildScheduledEvent, GuildScheduledEventStatus } from "discord.js";
export declare enum ScheduledEventProperty {
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
export declare const ScheduledEventProperties: import("..").Properties<typeof ScheduledEventProperty, GuildScheduledEvent<GuildScheduledEventStatus>>;
//# sourceMappingURL=scheduledEvent.d.ts.map