import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$applicationCommandID",
    version: "1.0.7",
    description: "Returns the application command id",
    brackets: false,
    args: [
        {
            name: "name",
            description: "The name of the command to pull its id",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.String,
    unwrap: true,
    async execute(ctx, [name]) {
        if (this.hasFields) {
            const commands = await ctx.client.application.commands.fetch().catch(ctx.noop)
            return this.success(commands?.find((x) => x.name === name)?.id)
        }

        return this.success(ctx.interaction && "command" in ctx.interaction ? ctx.interaction.commandId : undefined)
    },
})
