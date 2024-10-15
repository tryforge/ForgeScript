import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$roleRawData",
    version: "1.5.0",
    description: "Returns the raw data of a role",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get role from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            rest: false,
            required: true,
            description: "The role to get raw data from",
            type: ArgType.Role,
            pointer: 0
        },
    ],
    output: ArgType.Json,
    execute(ctx, [, role]) {
        return this.successJSON((role ?? ctx.role)?.toJSON())
    },
})