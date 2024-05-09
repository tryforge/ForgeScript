import { Channel, ChannelType, Collection, Entitlement, EntitlementType, GuildMember } from "discord.js"
import defineProperties from "../functions/defineProperties"
import { IStates } from "../core"

export enum EntitlementProperty {
    userID = "userID",
    consumed = "consumed",
    guildId = "guildId",
    id = "id",
    skuID = "skuID",
    type = "type",
    endTimestamp = "endTimestamp",
    startTimestamp = "startTimestamp",
    active = "active",
    test = "test",
    guildSubscription = "guildSubscription",
    userSubscription = "userSubscription"
}

export const EntitlementProperties = defineProperties<typeof EntitlementProperty, IStates["entitlement"]>({
    skuID: (i) => i?.skuId,
    type: (i) => EntitlementType[i?.type!],
    id: (i) => i?.id,
    active: i => i?.isActive(),
    test: i => i?.isTest(),
    guildSubscription: i => i?.isGuildSubscription(),
    userSubscription: i => i?.isUserSubscription(),
    userID: (i, sep) => i?.userId,
    consumed: (i, sep) => i?.consumed,
    guildId: (i, sep) => i?.guildId,
    endTimestamp: (i, sep) => i?.endsTimestamp,
    startTimestamp: (i, sep) => i?.startsTimestamp,
})
