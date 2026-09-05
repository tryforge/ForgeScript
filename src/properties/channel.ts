/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Channel, ChannelType, Collection, GuildMember } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum ChannelProperty {
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
    lastPinTimestamp = "lastPinTimestamp",
}

export const ChannelProperties = defineProperties<typeof ChannelProperty, Channel>({
    id: (i) => i?.id,
    name: (i) => (i && "name" in i ? i.name : undefined),
    type: (i) => ChannelType[i?.type!],
    topic: (i) => (i && "topic" in i ? i.topic : undefined),
    bitrate: (i) => (i?.isVoiceBased() ? i.bitrate : undefined),
    members: (i, sep) =>
        i && "members" in i
            ? ((i.members instanceof Collection ? i.members : i.members.cache) as Collection<string, GuildMember>)
                .map((x) => x.id)
                .join(sep ?? ", ")
            : undefined,
    timestamp: (i) => i?.createdTimestamp,
    url: (i) => i?.url,
    nsfw: (i) => (i && "nsfw" in i ? i.nsfw : undefined),
    flags: (i, sep) => i?.flags?.toArray().join(sep ?? ", "),
    parentID: (i) => (i && "parentId" in i ? i.parentId : undefined),
    position: (i) => (i && "position" in i ? i.position : undefined),
    rawPosition: (i) => (i && "rawPosition" in i ? i.rawPosition : undefined),
    slowmode: (i) => (i && "rateLimitPerUser" in i ? i.rateLimitPerUser : undefined),
    appliedTags: (i, sep) => (i && "appliedTags" in i ? i.appliedTags.join(sep ?? ", ") : undefined),
    availableTags: (i, sep) => (i && "availableTags" in i ? i.availableTags.join(sep ?? ", ") : undefined),
    archived: (i) => (i && "archived" in i ? i.archived : undefined),
    locked: (i) => (i && "locked" in i ? i.locked : undefined),
    deletable: (i) => (i && "deletable" in i ? i.deletable : undefined),
    manageable: (i) => (i && "manageable" in i ? i.manageable : undefined),
    lastMessageID: (i) => (i && "lastMessageId" in i ? i.lastMessageId : undefined),
    lastPinTimestamp: (i) => (i && "lastPinTimestamp" in i ? i.lastPinTimestamp : undefined),
})