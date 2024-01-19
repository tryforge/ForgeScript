import { MemberProperties, MemberProperty } from "../../properties/member"
import { StageProperties, StageProperty } from "../../properties/stage"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$oldStage",
    version: "1.4.0",
    description: "Retrieves old data from an event whose context was a stage instance",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: StageProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(StageProperties[prop](ctx.states?.stage?.old, sep))
    },
})
