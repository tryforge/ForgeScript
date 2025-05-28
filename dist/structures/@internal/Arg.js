"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arg = void 0;
const NativeFunction_1 = require("./NativeFunction");
class Arg {
    constructor() { }
    static optionalString(name = "string", desc = "The string to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.String
        });
    }
    static requiredString(name = "string", desc = "The string to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.String
        });
    }
    static restString(name = "strings", desc = "The strings to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.String
        });
    }
    static optionalMessage(name = "message ID", desc = "The message to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            pointer: 0,
            type: NativeFunction_1.ArgType.Message
        });
    }
    static restMessage(name = "message IDs", desc = "The messages to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Message,
            pointer: 0
        });
    }
    static requiredMessage(name = "message ID", desc = "The message to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Message,
            pointer: 0,
            required: true
        });
    }
    static optionalChannel(name = "channel IDs", desc = "The channel to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Channel
        });
    }
    static restChannel(name = "channel IDs", desc = "The channels to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Channel
        });
    }
    static requiredChannel(name = "channel ID", desc = "The channel to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            type: NativeFunction_1.ArgType.Channel
        });
    }
    static optionalEnum(en, name = "enum value", desc = "The enum value to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Enum,
            enum: en
        });
    }
    static requiredEnum(en, name = "enum value", desc = "The enum values to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Enum,
            enum: en
        });
    }
    static restEnum(en, name = "enum values", desc = "The enum values to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Enum,
            enum: en
        });
    }
    static optionalColor(name = "color hex/int", desc = "The color to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Color
        });
    }
    static requiredColor(name = "color hex/int", desc = "The color to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Color
        });
    }
    static restColor(name = "color hex/int(s)", desc = "The colors to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Color
        });
    }
    static optionalGuild(name = "guild ID", desc = "The guild to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Guild
        });
    }
    static restGuild(name = "guild IDs", desc = "The guilds to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Guild
        });
    }
    static requiredGuild(name = "guild ID", desc = "The guild to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Guild
        });
    }
    static optionalRole(name = "role ID", desc = "The role to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Role,
            pointer: 0
        });
    }
    static requiredRole(name = "role ID", desc = "The role to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Role,
            pointer: 0
        });
    }
    static restRole(name = "role IDs", desc = "The roles to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Role,
            pointer: 0
        });
    }
    static optionalSticker(name = "sticker ID", desc = "The sticker to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Sticker,
        });
    }
    static requiredSticker(name = "sticker ID", desc = "The sticker to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Sticker,
        });
    }
    static restSticker(name = "sticker IDs", desc = "The stickers to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Sticker,
        });
    }
    static optionalJson(name = "json data", desc = "The JSON valid value to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Json
        });
    }
    static restJson(name = "json datas", desc = "The JSON valid values to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Json
        });
    }
    static requiredJson(name = "json data", desc = "The JSON valid value to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Json
        });
    }
    static optionalNumber(name = "number", desc = "The number to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Number
        });
    }
    static requiredNumber(name = "number", desc = "The number to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Number
        });
    }
    static restNumber(name = "numbers", desc = "The numbers to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Number
        });
    }
    static restUser(name = "user IDs", desc = "The users to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.User
        });
    }
    static requiredUser(name = "user ID", desc = "The user to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.User
        });
    }
    static optionalUser(name = "user ID", desc = "The user to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.User
        });
    }
    static optionalMember(name = "member ID", desc = "The guild member to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Member,
            pointer: 0
        });
    }
    static restMember(name = "member IDs", desc = "The guild members to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Member,
            pointer: 0
        });
    }
    static requiredMember(name = "member ID", desc = "The guild member to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Member,
            pointer: 0
        });
    }
    static optionalAutomodRule(name = "rule ID", desc = "The guild automod rule to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.AutomodRule,
            pointer: 0
        });
    }
    static restAutomodRule(name = "rule IDs", desc = "The guild automod rule to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.AutomodRule,
            pointer: 0
        });
    }
    static requiredAutomodRule(name = "rule ID", desc = "The guild automod rule to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.AutomodRule,
            pointer: 0
        });
    }
    static optionalScheduledEvent(name = "event ID", desc = "The guild scheduled event to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.ScheduledEvent,
            pointer: 0
        });
    }
    static restScheduledEvent(name = "event IDs", desc = "The guild scheduled events to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.ScheduledEvent,
            pointer: 0
        });
    }
    static requiredScheduledEvent(name = "event ID", desc = "The guild scheduled event to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.ScheduledEvent,
            pointer: 0
        });
    }
    static optionalStageInstance(name = "stage ID", desc = "The stage instance to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.StageInstance,
            pointer: 0
        });
    }
    static restStageInstance(name = "stage IDs", desc = "The stage instances to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.StageInstance,
            pointer: 0
        });
    }
    static requiredStageInstance(name = "stage ID", desc = "The stage instance to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.StageInstance,
            pointer: 0
        });
    }
    static optionalSoundboardSound(name = "sound ID", desc = "The soundboard sound to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.SoundboardSound,
            pointer: 0
        });
    }
    static restSoundboardSound(name = "sound IDs", desc = "The soundboard sounds to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.SoundboardSound,
            pointer: 0
        });
    }
    static requiredSoundboardSound(name = "sound ID", desc = "The soundboard sound to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.SoundboardSound,
            pointer: 0
        });
    }
    static restTextChannel(name = "text channel IDs", desc = "The text channels to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.TextChannel
        });
    }
    static optionalTextChannel(name = "text channel ID", desc = "The text channel to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.TextChannel
        });
    }
    static requiredTextChannel(name = "text channel ID", desc = "The text channel to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.TextChannel
        });
    }
    static restGuildEmoji(name = "emoji IDs", desc = "The guild emojis to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.GuildEmoji,
            pointer: 0
        });
    }
    static optionalGuildEmoji(name = "emoji ID", desc = "The guild emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.GuildEmoji,
            pointer: 0
        });
    }
    static requiredGuildEmoji(name = "emoji ID", desc = "The guild emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.GuildEmoji,
            pointer: 0
        });
    }
    static restApplicationEmoji(name = "emoji IDs", desc = "The application emojis to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.ApplicationEmoji,
        });
    }
    static optionalApplicationEmoji(name = "emoji ID", desc = "The application emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.ApplicationEmoji,
        });
    }
    static requiredApplicationEmoji(name = "emoji ID", desc = "The application emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.ApplicationEmoji,
        });
    }
    static restEmoji(name = "emoji IDs", desc = "The emojis to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Emoji,
        });
    }
    static optionalEmoji(name = "emoji ID", desc = "The emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Emoji,
        });
    }
    static requiredEmoji(name = "emoji ID", desc = "The emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Emoji,
        });
    }
    static restAttachment(name = "attachments", desc = "The attachments to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Attachment
        });
    }
    static optionalAttachment(name = "attachment", desc = "The attachment to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Attachment
        });
    }
    static requiredAttachment(name = "attachment", desc = "The attachment to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Attachment
        });
    }
    static optionalBigInt(name = "bigint", desc = "The bigint to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.BigInt
        });
    }
    static requiredBigInt(name = "bigint", desc = "The bigint to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.BigInt
        });
    }
    static restBigInt(name = "bigints", desc = "The bigints to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.BigInt
        });
    }
    static optionalURL(name = "url", desc = "The url to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.URL
        });
    }
    static requiredURL(name = "url", desc = "The url to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.URL
        });
    }
    static restURL(name = "urls", desc = "The urls to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.URL
        });
    }
    static optionalBoolean(name = "bool", desc = "The boolean to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Boolean
        });
    }
    static restBoolean(name = "bools", desc = "The booleans to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Boolean
        });
    }
    static requiredBoolean(name = "bool", desc = "The boolean to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Boolean
        });
    }
    static requiredInvite(name = "invite code", desc = "The invite code to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Invite
        });
    }
    static optionalInvite(name = "invite code", desc = "The invite code to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Invite
        });
    }
    static restInvite(name = "invite codes", desc = "The invite codes to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Invite
        });
    }
    static restWebhook(name = "webhook IDs", desc = "The webhooks to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Webhook
        });
    }
    static requiredWebhook(name = "webhook ID", desc = "The webhook to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Webhook
        });
    }
    static optionalWebhook(name = "webhook ID", desc = "The webhook to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Webhook
        });
    }
    static requiredTemplate(name = "template code", desc = "The template code to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Template
        });
    }
    static optionalTemplate(name = "template code", desc = "The template code to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Template
        });
    }
    static restTemplate(name = "template codes", desc = "The template codes to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Template
        });
    }
    static optionalReaction(name = "reaction emoji", desc = "The reaction emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Reaction,
            pointer: 1
        });
    }
    static requiredReaction(name = "reaction emoji", desc = "The reaction emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Reaction,
            pointer: 1
        });
    }
    static restReaction(name = "reaction emojis", desc = "The reaction emojis to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Reaction,
            pointer: 1
        });
    }
    static restTime(name = "duration/time", desc = "The duration/time to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Time,
        });
    }
    static optionalTime(name = "duration/time", desc = "The duration/time to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Time,
        });
    }
    static requiredTime(name = "duration/time", desc = "The duration/time to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Time,
        });
    }
    static requiredDate(name = "timestamp/date", desc = "The timestamp/date to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Date
        });
    }
    static optionalDate(name = "timestamp/date", desc = "The timestamp/date to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Date
        });
    }
    static restDate(name = "timestamp/date", desc = "The timestamp/date to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Date
        });
    }
    static restPermission(name = "permissions", desc = "The permissions to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.Permission
        });
    }
    static optionalPermission(name = "permissions", desc = "The permission to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.Permission
        });
    }
    static requiredPermission(name = "permission", desc = "The permission to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Permission
        });
    }
    static requiredOverwritePermission(name = "overwrite permission", desc = "The overwrite permission to use, preceded by (/,-,+)") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.OverwritePermission
        });
    }
    static restOverwritePermission(name = "overwrite permissions", desc = "The overwrite permissions to use, preceded by (/,-,+)", required = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: NativeFunction_1.ArgType.OverwritePermission
        });
    }
    static optionalOverwritePermission(name = "overwrite permission", desc = "The overwrite permission to use, preceded by (/,-,+)") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: NativeFunction_1.ArgType.OverwritePermission
        });
    }
    static optionalRoleOrUser(name = "role/user", desc = "The role/user to use") {
        return Arg.create({
            name,
            description: desc,
            pointer: 0,
            pointerProperty: "guild",
            rest: false,
            type: NativeFunction_1.ArgType.RoleOrUser
        });
    }
    static restRoleOrUser(name = "role/user(s)", desc = "The role/user(s) to use", required = false) {
        return Arg.create({
            name,
            description: desc,
            pointer: 0,
            pointerProperty: "guild",
            rest: true,
            required,
            type: NativeFunction_1.ArgType.RoleOrUser
        });
    }
    static requiredRoleOrUser(name = "role/user", desc = "The role/user to use") {
        return Arg.create({
            name,
            description: desc,
            pointer: 0,
            required: true,
            pointerProperty: "guild",
            rest: false,
            type: NativeFunction_1.ArgType.RoleOrUser
        });
    }
    static create(opts) {
        return opts;
    }
}
exports.Arg = Arg;
//# sourceMappingURL=Arg.js.map