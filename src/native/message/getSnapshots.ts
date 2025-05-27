import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { MessageProperties, MessageProperty } from "../../properties/message"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$getSnapshots",
    version: "2.4.0",
    description: "Retrieves data of snapshots from a message",
    aliases: ["$getSnapshot"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to retrieve data from",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
        },
        {
            name: "index",
            description: "The index of the snapshot to get",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: MessageProperty,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: [
        ArgType.Json,
        array<ArgType.Unknown>()
    ],
    execute(ctx, [, m, index, prop, sep]) {
        const snapshots = (m ?? ctx.message)?.messageSnapshots.toJSON()

        if (typeof index !== "number") return this.successJSON(snapshots)
        if (prop === null) return this.successJSON(snapshots[index])
        return this.success(MessageProperties[prop](snapshots[index], sep ?? ", "))
    },
})