import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$applicationCommandCount",
    version: "1.4.0",
    aliases: ["$slashCommandCount"],
    description: "Returns the amount of application commands registered by this bot",
    output: ArgType.Number,
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get application command count from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    async execute(ctx, [g]) {
        if (!this.hasFields) {
            return this.success(
                await ctx.client.application.commands
                    .fetch()
                    .then((x) => x.size)
                    .catch(ctx.noop)
            )
        }

        return this.success(
            await g.commands
                .fetch()
                .then((x) => x.size)
                .catch(ctx.noop)
        )
    },
})
