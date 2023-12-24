import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$onlyForGuilds",
    category: "unknown",
    version: "1.1.0",
    description: "Only executes code if given ids match the guild",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "code",
            description: "The code to execute if guild is not whitelisted",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "guilds",
            description: "The guilds to check for",
            rest: true,
            required: true,
            type: ArgType.Guild
        }
    ],
    async execute(ctx) {
        const code = this.data.fields![0] as IExtendedCompiledFunctionField
        let ok = false

        if (ctx.guild) {
            const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 1)
            if (!this["isValidReturnType"](rt)) return rt
            ok = args[0].some(x => x.id === ctx.guild!.id) ?? false
        }

        if (!ok)
            return this["fail"](ctx, code)

        return this.success()
    },
})