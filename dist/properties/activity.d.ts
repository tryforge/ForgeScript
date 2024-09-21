import { Activity } from "discord.js";
export declare enum ActivityProperty {
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
    smallImage = "smallImage"
}
export declare const ActivityProperties: import("../functions/defineProperties").Properties<typeof ActivityProperty, Activity>;
//# sourceMappingURL=activity.d.ts.map