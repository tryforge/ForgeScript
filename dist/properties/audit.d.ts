import { AuditLogEvent, GuildAuditLogsEntry } from "discord.js";
export declare enum AuditProperty {
    id = "id",
    targetID = "targetID",
    timestamp = "timestamp",
    reason = "reason",
    executorID = "executorID",
    actionType = "actionType",
    targetType = "targetType",
    action = "action",
    changes = "changes",
    extra = "extra"
}
export declare const AuditProperties: import("../functions/defineProperties").Properties<typeof AuditProperty, GuildAuditLogsEntry<AuditLogEvent, "Update" | "Create" | "Delete" | "All", "Unknown" | "User" | "Guild" | "Invite" | "Emoji" | "Message" | "Channel" | "Role" | "Webhook" | "Sticker" | "StageInstance" | "SoundboardSound" | "Integration" | "GuildScheduledEvent" | "Thread" | "ApplicationCommand" | "AutoModeration" | "GuildOnboardingPrompt" | "GuildOnboarding">>;
//# sourceMappingURL=audit.d.ts.map