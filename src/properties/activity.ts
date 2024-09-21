import { Activity, ActivityType } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum ActivityProperty {
    name = "name",
    type = "type",
    details = "details",
    buttons = "buttons",
    flags = "flags",
    timestamp = "timestamp",
    endTimestamp = "endTimestamp",
    startTimestamp = "startTimestamp",
    partyID = "partyID",
    partySize = "partySize",
    syncID = "syncID",
    url = "url",
    largeText = "largeText",
    largeImage = "largeImage",
    smallText = "smallText",
    smallImage = "smallImage",
}

export const ActivityProperties = defineProperties<typeof ActivityProperty, Activity>({
    name: (i) => i?.name,
    type: (i) => ActivityType[i?.type!],
    details: (i) => i?.details,
    buttons: (i, sep) => i?.buttons.join(sep ?? ", "),
    flags: (i, sep) => i?.flags.toArray().join(sep ?? ", "),
    timestamp: (i) => i?.createdTimestamp,
    endTimestamp: (i) => i?.timestamps?.end?.getTime(),
    startTimestamp: (i) => i?.timestamps?.start?.getTime(),
    partyID: (i) => i?.party?.id,
    partySize: (i) => i?.party?.size[0],
    syncID: (i) => i?.syncId,
    url: (i) => i?.url,
    largeText: (i) => i?.assets?.largeText,
    largeImage: (i) => i?.assets?.largeImageURL(),
    smallText: (i) => i?.assets?.smallText,
    smallImage: (i) => i?.assets?.smallImageURL(),
})