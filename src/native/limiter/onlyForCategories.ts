import { BaseChannel, CategoryChannel, ChannelType } from "discord.js"
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$onlyForCategories",
    version: "1.5.0",
    description: "Only executes code if given ids match the current category",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "code",
            description: "The code to execute if category is not whitelisted",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "channels",
            pointer: 0,
            description: "The categories to check for",
            rest: true,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.type === ChannelType.GuildCategory
        }
    ],
    async execute(ctx) {
        const code = this.data.fields![0] as IExtendedCompiledFunctionField
        let ok = false

        if (ctx.guild) {
            const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 1)
            if (!this["isValidReturnType"](rt)) return rt
            ok = args[0].some(x => x.id === (ctx.channel as CategoryChannel || null).parentId) ?? false
        }

        if (!ok)
            return this["fail"](ctx, code)

        return this.success()
    },
})