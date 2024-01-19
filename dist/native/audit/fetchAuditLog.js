"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const audit_1 = require("../../properties/audit");
exports.default = new structures_1.NativeFunction({
    name: "$fetchAuditLog",
    version: "1.4.0",
    description: "Fetches an audit log using the type of it",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "guild ID",
            description: "The guild to get audit log from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
        },
        {
            name: "type",
            description: "The event type of the log",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.AuditLogEvent
        },
        {
            name: "property",
            description: "The property to pull from the audit log",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: audit_1.AuditProperty
        },
        {
            name: "index",
            description: "The index of the entry to use",
            rest: false,
            type: structures_1.ArgType.Number
        },
        {
            name: "separator",
            description: "The separator to use in case of array output",
            type: structures_1.ArgType.String,
            rest: false
        }
    ],
    async execute(ctx, [g, type, prop, index, sep]) {
        const logs = await g.fetchAuditLogs({
            type
        }).catch(ctx.noop);
        return this.success(logs ? audit_1.AuditProperties[prop](logs.entries.at(index ?? 0), sep) : null);
    },
});
//# sourceMappingURL=fetchAuditLog.js.map