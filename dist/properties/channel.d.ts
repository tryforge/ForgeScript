import { Channel } from "discord.js";
export declare enum ChannelProperty {
    id = "id",
    name = "name",
    type = "type",
    topic = "topic",
    bitrate = "bitrate",
    members = "members",
    timestamp = "timestamp",
    url = "url",
    nsfw = "nsfw",
    flags = "flags",
    parentID = "parentID",
    position = "position",
    rawPosition = "rawPosition",
    slowmode = "slowmode",
    appliedTags = "appliedTags",
    availableTags = "availableTags",
    archived = "archived",
    locked = "locked",
    deletable = "deletable",
    manageable = "manageable",
    lastMessageID = "lastMessageID",
    lastPinTimestamp = "lastPinTimestamp"
}
export declare const ChannelProperties: import("..").Properties<typeof ChannelProperty, Channel>;
//# sourceMappingURL=channel.d.ts.map