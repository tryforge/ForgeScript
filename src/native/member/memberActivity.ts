import { ArgType, NativeFunction, Return } from "../../structures"
import { ActivityProperties, ActivityProperty } from "../../properties/activity"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$memberActivity",
    version: "1.5.0",
    description: "Returns the activity of a member",
    aliases: [
        "$activity",
        "$userActivity",
        "$memberActivities"
    ],
    unwrap: true,
    output: array<ArgType.Unknown>(),
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the member from",
            required: true,
            rest: false,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to return its activity",
            required: true,
            rest: false,
            type: ArgType.Member,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property of the activity to return",
            rest: false,
            type: ArgType.Enum,
            enum: ActivityProperty
        },
        {
            name: "separator",
            description: "The separator to use for every property",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: false,
    execute(ctx, [, member, prop, sep]) {
        const activity = (member ?? ctx.member)?.presence?.activities
        return this.success((prop ? activity?.map((x) => ActivityProperties[prop](x, sep)) : activity)?.join(sep ?? ", "))
    }
})