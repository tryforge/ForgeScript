import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleID",
    version: "1.0.0",
    description: "Returns a role id with given name",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild id to return the role from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "name",
            description: "The role name to return its id",
            rest: true,
            type: ArgType.String,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [guild, args]) {
        if (this.hasFields) {
            const name = args.join(";")
            return Return.success(guild.roles.cache.find((x) => x.name === name)?.id)
        }
        return Return.success(ctx.role?.id)
    },
})
