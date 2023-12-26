import { Channel, ChannelType, Collection, GuildMember } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum ChannelProperty {
    id = "id",
    type = "type",
    topic = "topic",
    bitrate = "bitrate",
    members = "members",
    name = "name",
    timestamp = "timestamp",
}

export const ChannelProperties = defineProperties<typeof ChannelProperty, Channel>({
    bitrate: (i) => (i?.isVoiceBased() ? i.bitrate : undefined),
    id: (i) => i?.id,
    timestamp: (i) => i?.createdTimestamp,
    name: (i) => (i && "name" in i ? i.name : undefined),
    members: (i, sep) =>
        i && "members" in i
            ? ((i.members instanceof Collection ? i.members : i.members.cache) as Collection<string, GuildMember>)
                .map((x) => x.id)
                .join(sep || ", ")
            : undefined,
    topic: (i) => (i && "topic" in i ? i.topic : undefined),
    type: (i) => ChannelType[i?.type!],
})
