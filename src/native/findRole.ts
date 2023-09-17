import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export const RoleMentionCharRegex = /[@<>&]/g

export default new NativeFunction({
    name: "$findRole",
    version: "1.0.0",
    description: "Finds a role of a guild",
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to find the role on",
            type: ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id, mention or role name to find",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    execute(_, [guild, q]) {
        const id = q.replace(RoleMentionCharRegex, "")

        if (CompiledFunction.IdRegex.test(id)) {
            const r = guild.roles.cache.get(id)
            if (r) return Return.success(r.id)
        }

        q = q.toLowerCase()

        return Return.success(guild.roles.cache.find((x) => x.id === id || x.name.toLowerCase() === q)?.id)
    },
})
