import { Arg, ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$deleteGuildApplicationCommands",
    version: "1.4.0",
    description: "Deletes all guild commands of your bot from a guild",
    unwrap: true,
    brackets: false,
    args: [Arg.requiredGuild(undefined, "The guild to delete commands from")],
    output: ArgType.Boolean,
    async execute(ctx, [g]) {
        g ??= ctx.guild!
        return this.success(!!(await g.commands.set([]).catch(ctx.noop)))
    },
})
