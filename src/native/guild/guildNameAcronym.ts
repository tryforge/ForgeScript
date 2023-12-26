import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildNameAcronym",
    version: "1.3.0",
    description: "Returns the server name acronym",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.nameAcronym)
    },
})
