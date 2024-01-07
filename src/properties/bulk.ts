import { Channel, ChannelType, Collection, GuildMember } from "discord.js"
import defineProperties from "../functions/defineProperties"
import { IStates } from "../core"

export enum BulkProperty {
    messages = "messages",
    contents = "contents",
    users = "users",
    count = "count"
}

export const BulkProperties = defineProperties<typeof BulkProperty, IStates["bulk"]>({
    messages: (i, sep) => i?.map(x => x.id).join(sep ?? ", "),
    contents: (i, sep) => i?.map(x => x.content).filter(Boolean).join(sep ?? ", "),
    users: (i, sep) => i?.map(x => x.author?.id).filter(Boolean).join(sep ?? ", "),
    count: i => i?.length
})
