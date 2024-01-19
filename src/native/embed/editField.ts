import { EmbedField } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editField",
    version: "1.4.0",
    description: "Edits an embed field, returns true if the field was successfully edited",
    unwrap: true,
    args: [
        {
            name: "field index",
            description: "The index field to edit",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "name",
            description: "The name for the field",
            type: ArgType.String,
            rest: false,
        },
        {
            name: "value",
            description: "The value for the field",
            type: ArgType.String,
            rest: false,
        },
        {
            name: "inline",
            description: "Whether this field will be inline",
            type: ArgType.Boolean,
            rest: false,
        },
        {
            name: "index",
            description: "The index to edit this data on",
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [fieldIndex, name, value, inline, index]) {
        const field = ctx.container.embed(index ?? 0).data.fields?.[fieldIndex]
        if (!field)
            return this.success()
        
        if (name)
            field.name = name
        if (value)
            field.value = value
        if (inline !== null)
            field.inline = inline

        return this.success()
    },
})
