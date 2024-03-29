import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildVerified",
    version: "1.3.0",
    description: "Returns whether the server is verified",
    brackets: false,
    aliases: [
        "$serverVerified"
    ],
    output: ArgType.Boolean,
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
        return this.success((guild ?? ctx.guild)?.verified)
    },
})
