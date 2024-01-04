import { noop } from "lodash"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$applicationCommandDescription",
    version: "1.0.7",
    description: "Returns an application command description",
    brackets: false,
    args: [
        {
            name: "id",
            description: "The id of the command to pull its description",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.String,
    unwrap: true,
    async execute(ctx, [id]) {
        if (this.hasFields) {
            const command = await ctx.client.application.commands.fetch(id).catch(noop)
            return this.success(command ? command.description : undefined)
        }

        return this.success(ctx.interaction?.isCommand() ? ctx.interaction.command?.description : undefined)
    },
})
