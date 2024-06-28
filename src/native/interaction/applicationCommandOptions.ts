import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$applicationCommandOptions",
    version: "1.5.0",
    description: "Returns an application command options in JSON format",
    brackets: false,
    args: [
        {
            name: "id",
            description: "The id of the command to pull its options",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Json,
    unwrap: true,
    async execute(ctx, [id]) {
        if (this.hasFields) {
            const command = await ctx.client.application.commands.fetch(id).catch(ctx.noop)
            return this.successJSON(command ? command.options : undefined)
        }

        return this.successJSON(ctx.interaction?.isCommand() ? ctx.interaction.command?.options : undefined)
    },
})
