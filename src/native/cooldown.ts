import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$cooldown",
    version: "1.0.3",
    description: "Adds a command cooldown",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "id",
            rest: false,
            description: "The id to assign the cooldown to, can be anything",
            type: ArgType.String,
            required: true
        },
        {
            name: "duration",
            description: "The duration of the cooldown",
            rest: false,
            type: ArgType.Time,
            required: true
        },
        {
            name: "code",
            description: "The code to execute if the cooldown is active",
            rest: false,
            type: ArgType.String
        },
    ],
    examples: [
        `$c[This is a guild based user cooldown]
$cooldown[$commandName_$guildID_$authorID;1h;You're on cooldown.]
Hello!
`,
        `$c[This is a user based cooldown]
$cooldown[$commandName_$authorID;1h;You're on cooldown.]
Hello!
`
    ],
    experimental: true,
    async execute(ctx) {
        const [
            id,
            duration,
            code 
        ] = this.data.fields! as IExtendedCompiledFunctionField[]

        const dur = await this["resolveUnhandledArg"](ctx, 0)
        if (!this["isValidReturnType"](dur)) return dur

        const idV = await this["resolveUnhandledArg"](ctx, 1)
        if (!this["isValidReturnType"](idV)) return idV

        const cooldown = ctx.client.cooldowns.getTimeLeft(idV.value as string)
        
        if (cooldown !== 0) {
            const content = await this["resolveCode"](ctx, code)
            if (!this["isValidReturnType"](content)) return content
            ctx.container.content = content.value as string
            await ctx.container.send(ctx.obj)
            return Return.stop()
        }

        ctx.client.cooldowns.add(idV.value as string, dur.value as number)

        return Return.success()
    },
})