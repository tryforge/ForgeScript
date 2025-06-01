import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"
import { RoleProperties, RoleProperty } from "../../properties/role"
import { RoleMentionCharRegex } from "./findRole"
import { SearchMethodType } from "./findChannels"

export default new NativeFunction({
    name: "$findRoles",
    version: "1.5.0",
    description: "Finds roles of a guild using a query",
    brackets: true,
    output: array<ArgType.Unknown>(),
    args: [
        {
            name: "guild ID",
            description: "The guild to find the roles on",
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
        {
            name: "limit",
            description: "The limit of results",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: ArgType.Enum,
            enum: RoleProperty
        },
        {
            name: "separator",
            description: "The separator to use for every result",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "method",
            description: "The method to use for searching",
            rest: false,
            type: ArgType.Enum,
            enum: SearchMethodType
        },
    ],
    unwrap: true,
    execute(ctx, [ guild, query, limit, prop, sep, method ]) {
        query = query.replace(RoleMentionCharRegex, "")
        limit ||= 10
        prop ||= RoleProperty.id

        const search = guild.roles.cache.filter(role => { 
            switch(method) {
                case SearchMethodType.startsWith:
                    return (role.id.startsWith(query) || role.name.startsWith(query))
                case SearchMethodType.endsWith:
                    return (role.id.endsWith(query) || role.name.endsWith(query))
                default:
                    return (role.id.includes(query) || role.name.includes(query))
            }
        }).toJSON().slice(0, limit)

        return this.success(search?.map((x) => RoleProperties[prop!](x)).join(sep ?? ", "))
    },
})