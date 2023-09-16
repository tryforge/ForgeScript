import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import { MessageProperties, MessageProperty } from "../properties/message"

export default new NativeFunction({
    name: "$getMessage",
    version: "1.0.3",
    description: "Retrieves data of a message",
    unwrap: true,
    brackets: true,
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
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: MessageProperty,
            required: true,
        },
        {
            name: "separator",
            description: "Separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [, m, prop, sep]) {
        return Return.success(MessageProperties[prop](m, sep || ", "))
    },
})
