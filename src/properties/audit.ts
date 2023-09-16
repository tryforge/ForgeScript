import { AuditLogEvent, GuildAuditLogsEntry } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum AuditProperty {
    id = "id",
    targetID = "targetID",
    timestamp = "timestamp",
    reason = "reason",
    executorID = "executorID",
    actionType = "actionType",
    targetType = "targetType",
    action = "action",
    changes = "changes",
    extra = "extra",
}

export const AuditProperties = defineProperties<typeof AuditProperty, GuildAuditLogsEntry>({
    id: (i) => i?.id,
    executorID: (i) => i?.executorId,
    targetID: (i) => i?.targetId,
    extra: (i) => (i ? (typeof i === "string" ? i : JSON.stringify(i.extra)) : undefined),
    changes: (i) => (i ? JSON.stringify(i.changes) : undefined),
    reason: (i) => i?.reason,
    timestamp: (i) => i?.createdTimestamp,
    action: (i) => AuditLogEvent[i?.action!],
    actionType: (i) => i?.actionType,
    targetType: (i) => i?.targetType,
})
