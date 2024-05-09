import { ChatInputCommandInteraction } from "discord.js"
import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setBotBanner",
    version: "1.5.0",
    description: "Sets the bot banner",
    brackets: true,
    unwrap: true,
    aliases: [
        "$setClientBanner"
    ],
    args: [
        {
            name: "url",
            description: "The banner url",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [url]) {
        return this.success(!!(await ctx.client.user.setBanner(url).catch(ctx.noop)))
    },
})
