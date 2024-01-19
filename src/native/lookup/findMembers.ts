import array from "../../functions/array"
import { MemberProperties, MemberProperty } from "../../properties/member"
import { Arg, ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$findMembers",
    version: "1.4.0",
    description: "Finds member of a guild using a query",
    brackets: true,
    unwrap: true,
    args: [
        Arg.requiredGuild(),
        Arg.requiredString("query", "The query to use"),
        Arg.optionalNumber("limit", "The limit of results"),
        Arg.optionalEnum(MemberProperty),
        Arg.optionalString("separator", "The separator to use for every result"),
    ],
    output: array<ArgType.String>(),
    async execute(ctx, [guild, query, limit, en, sep]) {
        limit ??= 10
        en ??= MemberProperty.id

        const search = await guild.members
            .search({
                limit,
                query,
            })
            .catch(ctx.noop)

        return this.success(search?.map((x) => MemberProperties[en!](x)).join(sep ?? ", "))
    },
})
