"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fetchAuditLogCount",
    version: "1.4.0",
    description: "Fetches audit log count using the type of it",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
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
            name: "user",
            rest: false,
            description: "The user to filter by",
            type: structures_1.ArgType.User
        }
    ],
    async execute(ctx, [g, type, user]) {
        const logs = await g.fetchAuditLogs({
            type,
            user: user ?? undefined
        }).catch(ctx.noop);
        return this.success(logs ? logs.entries.size : null);
    },
});
//# sourceMappingURL=fetchAuditLogCount.js.map