import { ActivityType, PresenceStatusData, PresenceUpdateStatus } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$setStatus",
    version: "1.0.0",
    description: "Sets the client's status",
    unwrap: true,
    args: [
        {
            name: "presence",
            description: "The presence status",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "type",
            description: "The activity type",
            rest: false,
            type: ArgType.Enum,
            enum: ActivityType,
            required: true,
        },
        {
            name: "name",
            description: "The status name",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "state",
            description: "The status state",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "url",
            description: "The url to use for the stream",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [status, type, name, state, url]) {
        ctx.client.user.setPresence({
            activities: [
                {
                    name,
                    state: state || undefined,
                    type,
                    url: url || undefined,
                },
            ],
            status: status as PresenceStatusData,
        })
        return Return.success()
    },
})
