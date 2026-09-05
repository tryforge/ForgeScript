"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduledEventProperties = exports.ScheduledEventProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var ScheduledEventProperty;
(function (ScheduledEventProperty) {
    ScheduledEventProperty["id"] = "id";
    ScheduledEventProperty["userID"] = "userID";
    ScheduledEventProperty["guildID"] = "guildID";
    ScheduledEventProperty["channelID"] = "channelID";
    ScheduledEventProperty["name"] = "name";
    ScheduledEventProperty["userCount"] = "userCount";
    ScheduledEventProperty["description"] = "description";
    ScheduledEventProperty["startTimestamp"] = "startTimestamp";
    ScheduledEventProperty["endTimestamp"] = "endTimestamp";
    ScheduledEventProperty["timestamp"] = "timestamp";
    ScheduledEventProperty["url"] = "url";
    ScheduledEventProperty["cover"] = "cover";
    ScheduledEventProperty["entityID"] = "entityID";
    ScheduledEventProperty["location"] = "location";
    ScheduledEventProperty["entityType"] = "entityType";
    ScheduledEventProperty["privacyLevel"] = "privacyLevel";
    ScheduledEventProperty["status"] = "status";
})(ScheduledEventProperty || (exports.ScheduledEventProperty = ScheduledEventProperty = {}));
exports.ScheduledEventProperties = (0, defineProperties_1.default)({
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
    entityType: i => discord_js_1.GuildScheduledEventEntityType[i?.entityType],
    privacyLevel: i => discord_js_1.GuildScheduledEventPrivacyLevel[i?.privacyLevel],
    status: i => discord_js_1.GuildScheduledEventStatus[i?.status]
});
//# sourceMappingURL=scheduledEvent.js.map