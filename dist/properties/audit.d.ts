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
export declare const AuditProperties: import("../functions/defineProperties").Properties<typeof AuditProperty, GuildAuditLogsEntry>;
//# sourceMappingURL=audit.d.ts.map