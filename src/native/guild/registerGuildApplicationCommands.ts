import { Arg, ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$registerGuildApplicationCommands",
    version: "1.4.0",
    description: "Registers all application commands with type: 1 to a guild",
    unwrap: true,
    brackets: false,
    args: [Arg.requiredGuild(undefined, "The guild to register commands to")],
    output: ArgType.Boolean,
    async execute(ctx, [g]) {
        g ??= ctx.guild!
        return this.success(!!(await ctx.client.applicationCommands.registerGuild(g)?.catch(ctx.noop)))
    },
})
