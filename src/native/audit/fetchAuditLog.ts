import { AuditLogEvent } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import noop from "../../functions/noop"
import { AuditProperties, AuditProperty } from "../../properties/audit"

export default new NativeFunction({
    name: "$fetchAuditLog",
    version: "1.4.0",
    description: "Fetches an audit log using the type of it",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    aliases: [
        /(?:get|fetch)(?:server|guild)?audit(?:logs?)?/
    ],
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
            name: "property",
            description: "The property to pull from the audit log",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: AuditProperty
        },
        {
            name: "index",
            description: "The index of the entry to use",
            rest: false,
            type: ArgType.Number
        },
        {
            name: "separator",
            description: "The separator to use in case of array output",
            type: ArgType.String,
            rest: false
        }
    ],
    async execute(ctx, [ g, type, prop, index, sep ]) {
        const logs = await g.fetchAuditLogs({
            type
        }).catch(noop)
        return this.success(logs ? AuditProperties[prop](logs.entries.at(index ?? 0), sep) : null)
    },
})