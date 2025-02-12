import { ApplicationCommandOptionType } from "discord.js"
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
            type: ArgType.Guild,
        },
        {
            name: "count sub",
            description: "Whether to count sub commands",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    async execute(ctx, [g, sub]) {
        const commands = await ctx.client.application.commands.fetch({ guildId: g?.id }).catch(ctx.noop)
        if (!commands) return this.success(0)

        if (sub) {
            let count = 0
            commands.forEach((command) => {
                let cont = true
                command.options.forEach((cmd) => {
                    if (cmd.type === ApplicationCommandOptionType.Subcommand) {
                        count++
                        cont = false
                    } else if (cmd.type === ApplicationCommandOptionType.SubcommandGroup) {
                        cmd.options?.forEach((x) => count++)
                        cont = false
                    }
                })
                if (cont) count++
            })
            return this.success(count)
        } else {
            return this.success(commands.size)
        }
    },
})