import { ArgType, EnumLike, IArg, NativeFunction } from "./NativeFunction"

export class Arg {
    private constructor() {}

    public static optionalString(name: string = "string", desc: string = "The string to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.String
        })
    }

    public static requiredString(name: string = "string", desc: string = "The string to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.String
        })
    }

    public static restString(name: string = "strings", desc: string = "The strings to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.String
        })
    }

    public static optionalMessage(name: string = "message ID", desc: string = "The message to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            pointer: 0,
            type: ArgType.Message
        })
    }

    public static restMessage(name: string = "message IDs", desc: string = "The messages to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            type: ArgType.Message,
            pointer: 0
        })
    }

    public static requiredMessage(name: string = "message ID", desc: string = "The message to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true
        })
    }

    public static optionalChannel(name: string = "channel IDs", desc: string = "The channel to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Channel
        })
    }

    public static restChannel(name: string = "channel IDs", desc: string = "The channels to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Channel
        })
    }

    public static requiredChannel(name: string = "channel ID", desc: string = "The channel to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            type: ArgType.Channel
        })
    }

    public static optionalEnum<T extends EnumLike>(en: T, name: string = "enum value", desc: string = "The enum value to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Enum,
            enum: en
        })
    }

    public static requiredEnum<T extends EnumLike>(en: T, name: string = "enum value", desc: string = "The enum values to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: en
        })
    }

    public static restEnum<T extends EnumLike>(en: T, name: string = "enum values", desc: string = "The enum values to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            type: ArgType.Enum,
            enum: en
        })
    }

    public static optionalColor(name: string = "color hex/int", desc: string = "The color to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Color
        })
    }

    public static requiredColor(name: string = "color hex/int", desc: string = "The color to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Color
        })
    }

    public static restColor(name: string = "color hex/int(s)", desc: string = "The colors to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Color
        })
    }

    public static optionalGuild(name: string = "guild ID", desc: string = "The guild to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Guild
        })
    }

    public static restGuild(name: string = "guild IDs", desc: string = "The guilds to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Guild
        })
    }

    public static requiredGuild(name: string = "guild ID", desc: string = "The guild to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Guild
        })
    }

    public static optionalRole(name: string = "role ID", desc: string = "The role to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Role,
            pointer: 0
        })
    }

    public static requiredRole(name: string = "role ID", desc: string = "The role to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Role,
            pointer: 0
        })
    }

    public static restRole(name: string = "role IDs", desc: string = "The roles to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Role,
            pointer: 0
        })
    }

    public static optionalSticker(name: string = "sticker ID", desc: string = "The sticker to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Sticker,
        })
    }

    public static requiredSticker(name: string = "sticker ID", desc: string = "The sticker to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Sticker,
        })
    }

    public static restSticker(name: string = "sticker IDs", desc: string = "The stickers to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Sticker,
        })
    }

    public static optionalJson(name: string = "json data", desc: string = "The JSON valid value to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Json
        })
    }

    public static restJson(name: string = "json datas", desc: string = "The JSON valid values to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Json
        })
    }

    public static requiredJson(name: string = "json data", desc: string = "The JSON valid value to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Json
        })
    }

    public static optionalNumber(name: string = "number", desc: string = "The number to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Number
        })
    }

    public static requiredNumber(name: string = "number", desc: string = "The number to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Number
        })
    }

    public static restNumber(name: string = "numbers", desc: string = "The numbers to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Number
        })
    }

    public static restUser(name: string = "user IDs", desc: string = "The users to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.User
        })
    }

    public static requiredUser(name: string = "user ID", desc: string = "The user to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.User
        })
    }

    public static optionalUser(name: string = "user ID", desc: string = "The user to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.User
        })
    }

    public static optionalMember(name: string = "member ID", desc: string = "The guild member to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Member,
            pointer: 0
        })
    }

    public static restMember(name: string = "member IDs", desc: string = "The guild members to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Member,
            pointer: 0
        })
    }

    public static requiredMember(name: string = "member ID", desc: string = "The guild member to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Member,
            pointer: 0
        })
    }

    public static optionalAutomodRule(name: string = "rule ID", desc: string = "The guild automod rule to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.AutomodRule,
            pointer: 0
        })
    }

    public static restAutomodRule(name: string = "rule IDs", desc: string = "The guild automod rule to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.AutomodRule,
            pointer: 0
        })
    }

    public static requiredAutomodRule(name: string = "rule ID", desc: string = "The guild automod rule to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.AutomodRule,
            pointer: 0
        })
    }

    public static optionalScheduledEvent(name: string = "event ID", desc: string = "The guild scheduled event to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.ScheduledEvent,
            pointer: 0
        })
    }

    public static restScheduledEvent(name: string = "event IDs", desc: string = "The guild scheduled events to use", required: boolean = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: ArgType.ScheduledEvent,
            pointer: 0
        })
    }

    public static requiredScheduledEvent(name: string = "event ID", desc: string = "The guild scheduled event to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.ScheduledEvent,
            pointer: 0
        })
    }

    public static optionalStageInstance(name: string = "stage ID", desc: string = "The stage instance to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.StageInstance,
            pointer: 0
        })
    }

    public static restStageInstance(name: string = "stage IDs", desc: string = "The stage instances to use", required: boolean = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: ArgType.StageInstance,
            pointer: 0
        })
    }

    public static requiredStageInstance(name: string = "stage ID", desc: string = "The stage instance to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.StageInstance,
            pointer: 0
        })
    }

    public static optionalSoundboardSound(name: string = "sound ID", desc: string = "The soundboard sound to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.SoundboardSound,
            pointer: 0
        })
    }

    public static restSoundboardSound(name: string = "sound IDs", desc: string = "The soundboard sounds to use", required: boolean = false) {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required,
            type: ArgType.SoundboardSound,
            pointer: 0
        })
    }

    public static requiredSoundboardSound(name: string = "sound ID", desc: string = "The soundboard sound to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.SoundboardSound,
            pointer: 0
        })
    }

    public static restTextChannel(name: string = "text channel IDs", desc: string = "The text channels to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.TextChannel
        })
    }

    public static optionalTextChannel(name: string = "text channel ID", desc: string = "The text channel to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.TextChannel
        })
    }

    public static requiredTextChannel(name: string = "text channel ID", desc: string = "The text channel to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.TextChannel
        })
    }

    public static restGuildEmoji(name: string = "emoji IDs", desc: string = "The guild emojis to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.GuildEmoji,
            pointer: 0
        })
    }

    public static optionalGuildEmoji(name: string = "emoji ID", desc: string = "The guild emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.GuildEmoji,
            pointer: 0
        })
    }

    public static requiredGuildEmoji(name: string = "emoji ID", desc: string = "The guild emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.GuildEmoji,
            pointer: 0
        })
    }

    public static restApplicationEmoji(name: string = "emoji IDs", desc: string = "The application emojis to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.ApplicationEmoji,
        })
    }

    public static optionalApplicationEmoji(name: string = "emoji ID", desc: string = "The application emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.ApplicationEmoji,
        })
    }

    public static requiredApplicationEmoji(name: string = "emoji ID", desc: string = "The application emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.ApplicationEmoji,
        })
    }

    public static restEmoji(name: string = "emoji IDs", desc: string = "The emojis to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Emoji,
        })
    }

    public static optionalEmoji(name: string = "emoji ID", desc: string = "The emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Emoji,
        })
    }

    public static requiredEmoji(name: string = "emoji ID", desc: string = "The emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Emoji,
        })
    }

    public static restAttachment(name: string = "attachments", desc: string = "The attachments to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Attachment
        })
    }

    public static optionalAttachment(name: string = "attachment", desc: string = "The attachment to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Attachment
        })
    }

    public static requiredAttachment(name: string = "attachment", desc: string = "The attachment to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Attachment
        })
    }

    public static optionalBigInt(name: string = "bigint", desc: string = "The bigint to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.BigInt
        })
    }

    public static requiredBigInt(name: string = "bigint", desc: string = "The bigint to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.BigInt
        })
    }

    public static restBigInt(name: string = "bigints", desc: string = "The bigints to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.BigInt
        })
    }

    public static optionalURL(name: string = "url", desc: string = "The url to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.URL
        })
    }

    public static requiredURL(name: string = "url", desc: string = "The url to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.URL
        })
    }

    public static restURL(name: string = "urls", desc: string = "The urls to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.URL
        })
    }

    public static optionalBoolean(name: string = "bool", desc: string = "The boolean to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Boolean
        })
    }

    public static restBoolean(name: string = "bools", desc: string = "The booleans to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Boolean
        })
    }

    public static requiredBoolean(name: string = "bool", desc: string = "The boolean to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Boolean
        })
    }

    public static requiredInvite(name: string = "invite code", desc: string = "The invite code to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Invite
        })
    }

    public static optionalInvite(name: string = "invite code", desc: string = "The invite code to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Invite
        })
    }

    public static restInvite(name: string = "invite codes", desc: string = "The invite codes to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Invite
        })
    }

    public static restWebhook(name: string = "webhook IDs", desc: string = "The webhooks to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Webhook
        })
    }

    public static requiredWebhook(name: string = "webhook ID", desc: string = "The webhook to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Webhook
        })
    }

    public static optionalWebhook(name: string = "webhook ID", desc: string = "The webhook to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Webhook
        })
    }

    public static optionalReaction(name: string = "reaction emoji", desc: string = "The reaction emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Reaction,
            pointer: 1
        })
    }

    public static requiredReaction(name: string = "reaction emoji", desc: string = "The reaction emoji to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Reaction,
            pointer: 1
        })
    }

    public static restReaction(name: string = "reaction emojis", desc: string = "The reaction emojis to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Reaction,
            pointer: 1
        })
    }

    public static restTime(name: string = "duration/time", desc: string = "The duration/time to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Time,
        })
    }

    public static optionalTime(name: string = "duration/time", desc: string = "The duration/time to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Time,
        })
    }

    public static requiredTime(name: string = "duration/time", desc: string = "The duration/time to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Time,
        })
    }

    public static requiredDate(name: string = "timestamp/date", desc: string = "The timestamp/date to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Date
        })
    }

    public static optionalDate(name: string = "timestamp/date", desc: string = "The timestamp/date to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Date
        })
    }

    public static restDate(name: string = "timestamp/date", desc: string = "The timestamp/date to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Date
        })
    }

    public static restPermission(name: string = "permissions", desc: string = "The permissions to use") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.Permission
        })
    }

    public static optionalPermission(name: string = "permissions", desc: string = "The permission to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.Permission
        })
    }

    public static requiredPermission(name: string = "permission", desc: string = "The permission to use") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.Permission
        })
    }

    public static requiredOverwritePermission(name: string = "overwrite permission", desc: string = "The overwrite permission to use, preceded by (/,-,+)") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            required: true,
            type: ArgType.OverwritePermission
        })
    }

    public static restOverwritePermission(name: string = "overwrite permissions", desc: string = "The overwrite permissions to use, preceded by (/,-,+)") {
        return Arg.create({
            name,
            description: desc,
            rest: true,
            required: true,
            type: ArgType.OverwritePermission
        })
    }

    public static optionalOverwritePermission(name: string = "overwrite permission", desc: string = "The overwrite permission to use, preceded by (/,-,+)") {
        return Arg.create({
            name,
            description: desc,
            rest: false,
            type: ArgType.OverwritePermission
        })
    }

    public static optionalRoleOrUser(name: string = "role/user", desc: string = "The role/user to use") {
        return Arg.create({
            name,
            description: desc,
            pointer: 0,
            pointerProperty: "guild",
            rest: false,
            type: ArgType.RoleOrUser
        })
    }

    public static restRoleOrUser(name: string = "role/user(s)", desc: string = "The role/user(s) to use") {
        return Arg.create({
            name,
            description: desc,
            pointer: 0,
            pointerProperty: "guild",
            rest: true,
            required: true,
            type: ArgType.RoleOrUser
        })
    }

    public static requiredRoleOrUser(name: string = "role/user", desc: string = "The role/user to use") {
        return Arg.create({
            name,
            description: desc,
            pointer: 0,
            required: true,
            pointerProperty: "guild",
            rest: false,
            type: ArgType.RoleOrUser
        })
    }

    private static create<Type extends ArgType, Required extends boolean, Rest extends boolean, Enum extends EnumLike>(opts: IArg<Type, Required, Rest, Enum>) {
        return opts
    }
}