import { EmbedField } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$addField",
    version: "1.0.0",
    description: "Adds an embed field",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name for the field",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "value",
            description: "The value for the field",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "inline",
            description: "Whether this field will be inline",
            type: ArgType.Boolean,
            rest: false
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: ArgType.Number
        }
    ],
    brackets: true,
    execute(ctx, [ name, value, inline, index ]) {
        ctx.container.embed((index ?? 0)).addFields({
            name,
            value,
            inline: inline ?? false
        })

        return Return.success()
    },
})