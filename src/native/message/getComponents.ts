import { ActionRow, BaseChannel, MessageActionRowComponent } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { ComponentProperties, ComponentProperty } from "../../properties/component"

export default new NativeFunction({
    name: "$getComponents",
    version: "1.4.0",
    description: "Retrieves data of a component, not providing any property returns component json",
    unwrap: true,
    output: ArgType.Unknown,
    brackets: false,
    aliases: ["$getComponent"],
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
            name: "row index",
            description: "The row index to get data from",
            rest: false,
            required: false,
            type: ArgType.Number,
        },
        {
            name: "component index",
            description: "The component index to get data from",
            rest: false,
            required: false,
            type: ArgType.Number,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: ComponentProperty,
            required: false,
        },
        {
            name: "separator",
            description: "The separator to use for each value in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [, m, rowIndex, compIndex, prop, sep]) {
        if (typeof rowIndex !== "number") {
            return this.successJSON((m ?? ctx.message)?.components.filter((x) => "components" in x).map((x) => (x as any).components))
        }

        const row = m.components[rowIndex] as ActionRow<MessageActionRowComponent> | undefined
        const comp = row?.components[compIndex!] as MessageActionRowComponent | undefined

        if (prop === null) {
            return this.successJSON(comp?.data ?? row?.components)
        }

        return this.success(ComponentProperties[prop](comp, sep))
    },
})