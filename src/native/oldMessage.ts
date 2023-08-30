import { MessageProperties, MessageProperty } from "../properties/message"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$oldMessage",
    description: "Retrieves old data from an event whose context was a message instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: MessageProperty,
            required: true
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ prop, sep ]) {
        return Return.success(
            MessageProperties[prop](ctx.states?.message?.old, sep)
        )
    },
})