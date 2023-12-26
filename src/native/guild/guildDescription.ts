import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildDescription",
    category: "guild",
    version: "1.0.0",
    description: "Returns the server description",
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
        return this.success((guild ?? ctx.guild)?.description)
    },
})