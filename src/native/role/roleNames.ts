import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$roleNames",
    version: "1.0.0",
    description: "Returns the role names of a guild",
    brackets: false,
    output: array<ArgType.String>(),
    args: [
        {
            name: "guild ID",
            description: "The guild to return the roles of",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each role",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, sep]) {
        return this.success(
            (guild ?? ctx.guild)?.roles.cache
                .filter((x) => x.guild.id !== x.id)
                .map((x) => x.name)
                .join(sep || ", ")
        )
    },
})
