import { Arg, ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$deleteGlobalApplicationCommands",
    description: "Deletes all global commands of your bot",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.success(!!(await ctx.client.application?.commands.set([]).catch(ctx.noop)))
    },
})
