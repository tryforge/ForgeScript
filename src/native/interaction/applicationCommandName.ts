import { noop } from "lodash"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$applicationCommandName",
    category: "interaction",
    version: "1.0.7",
    description: "Returns an application command name",
    brackets: false,
    args: [
        {
            name: "id",
            description: "The id of the command to pull its name",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    async execute(ctx, [id]) {
        if (this.hasFields) {
            const command = await ctx.client.application.commands.fetch(id).catch(noop)
            return this.success(command ? command.name : undefined)
        }

        return this.success(ctx.interaction?.isCommand() ? ctx.interaction.command?.name : undefined)
    },
})
