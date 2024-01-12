import { AuditLogEvent } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import noop from "../../functions/noop"
import { AuditProperties, AuditProperty } from "../../properties/audit"

export default new NativeFunction({
    name: "$fetchAuditLogCount",
    version: "1.4.0",
    description: "Fetches audit log count using the type of it",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "guild ID",
            description: "The guild to get audit log from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "type",
            description: "The event type of the log",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: AuditLogEvent
        },
        {
            name: "user",
            rest: false,
            description: "The user to filter by",
            type: ArgType.User
        }
    ],
    async execute(ctx, [ g, type, user ]) {
        const logs = await g.fetchAuditLogs({
            type,
            user: user ?? undefined
        }).catch(noop)
        return this.success(logs ? logs.entries.size : null)
    },
})