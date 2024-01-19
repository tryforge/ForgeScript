"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditProperties = exports.AuditProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var AuditProperty;
(function (AuditProperty) {
    AuditProperty["id"] = "id";
    AuditProperty["targetID"] = "targetID";
    AuditProperty["timestamp"] = "timestamp";
    AuditProperty["reason"] = "reason";
    AuditProperty["executorID"] = "executorID";
    AuditProperty["actionType"] = "actionType";
    AuditProperty["targetType"] = "targetType";
    AuditProperty["action"] = "action";
    AuditProperty["changes"] = "changes";
    AuditProperty["extra"] = "extra";
})(AuditProperty || (exports.AuditProperty = AuditProperty = {}));
exports.AuditProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    executorID: (i) => i?.executorId,
    targetID: (i) => i?.targetId,
    extra: (i) => (i ? (typeof i === "string" ? i : JSON.stringify(i.extra)) : undefined),
    changes: (i) => (i ? JSON.stringify(i.changes) : undefined),
    reason: (i) => i?.reason,
    timestamp: (i) => i?.createdTimestamp,
    action: (i) => discord_js_1.AuditLogEvent[i?.action],
    actionType: (i) => i?.actionType,
    targetType: (i) => i?.targetType,
});
//# sourceMappingURL=audit.js.map