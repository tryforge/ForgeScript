import noop from "../functions/noop"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleExists",
    description: "Returns whether an role id exists",
    unwrap: true,
    brackets: true,
    args: [ 
        {
            name: "guild ID",
            description: "The guild to check for the role",
            type: ArgType.Guild,
            rest: false,
            required: true
        },
        {
            name: "role ID",
            description: "The role to check for",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ guild, id ]) {
        return Return.success(
            CompiledFunction.IdRegex.test(id) &&
            guild.roles.cache.has(id)
        )
    },
})