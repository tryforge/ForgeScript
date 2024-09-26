import { ArgType, NativeFunction, Return } from "../../structures"
import { MessageProperties, MessageProperty } from "../../properties/message"

export default new NativeFunction({
    name: "$targetMessage",
    version: "1.5.0",
    description: "Retrieves data of the target message",
    unwrap: true,
    brackets: true,
    args: [
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
    output: ArgType.Unknown,
    execute(ctx, [prop, sep]) {
        return this.success(ctx.interaction?.isMessageContextMenuCommand() ? MessageProperties[prop](ctx.interaction.targetMessage, sep ?? ", ") : null)
    },
})