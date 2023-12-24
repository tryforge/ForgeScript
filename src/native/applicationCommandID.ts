import { noop } from "lodash"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$applicationCommandID",
    version: "1.0.7",
    description: "Returns an application command id",
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
    unwrap: true,
    async execute(ctx, [name]) {
        if (this.hasFields) {
            const commands = await ctx.client.application.commands.fetch().catch(noop)
            return this.success(commands?.find((x) => x.name === name)?.id)
        }

        return this.success(ctx.interaction?.isCommand() ? ctx.interaction.commandName : undefined)
    },
})
