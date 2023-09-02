import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$input",
    version: "1.0.0",
    description: "Returns a value from a text field",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id to get the input field value",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    execute(ctx, [ id ]) {
        return Return.success(
            ctx.interaction?.isModalSubmit() ? ctx.interaction.fields.getTextInputValue(id) : undefined
        )
    },
})