import array from "../../functions/array"
import { StageProperties, StageProperty } from "../../properties/stage"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildStageInstances",
    version: "2.3.0",
    description: "Returns all active stage instances of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get stage instances from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "property",
            description: "The property of each stage instance to return",
            rest: false,
            type: ArgType.Enum,
            enum: StageProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: [
        ArgType.Json,
        array<ArgType.Unknown>()
    ],
    async execute(ctx, [ guild, prop, sep ]) {
        const instances = (guild ?? ctx.guild).stageInstances.cache
        if (prop) return this.success(instances.map((x) => StageProperties[prop](x)).join(sep ?? ", "))
        return this.successJSON(instances)
    },
})