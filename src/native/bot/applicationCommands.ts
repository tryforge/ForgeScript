import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$applicationCommands",
    version: "1.5.0",
    description: "Returns all application commands",
    output: ArgType.Json,
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get application commands from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    async execute(ctx, [guild]) {
        const commands = await ctx.client.application.commands.fetch({ guildId: guild?.id }).catch(ctx.noop)
        return this.successJSON(commands)
    },
})