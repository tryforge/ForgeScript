import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleExists",
    version: "1.0.0",
    description: "Returns whether a role id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to check for the role",
            type: ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "role ID",
            description: "The role to check for",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(_, [guild, id]) {
        return this.success(CompiledFunction.IdRegex.test(id) && guild.roles.cache.has(id))
    },
})
