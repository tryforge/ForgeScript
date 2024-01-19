import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$mentionedRoleCount",
    aliases: [
        "$mentionedRolesCount"
    ],
    output: ArgType.Number,
    version: "1.3.0",
    description: "Returns the mentioned role count",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.message?.mentions.roles.size)
    },
})
