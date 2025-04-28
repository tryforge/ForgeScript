import { StageProperties, StageProperty } from "../../properties/stage"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$getStageInstance",
    version: "2.3.0",
    description: "Returns a stage instance of a guild",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "stage ID",
            description: "The stage instance to get",
            rest: false,
            required: true,
            type: ArgType.StageInstance,
        },
        {
            name: "property",
            description: "The property of the stage instance to return",
            rest: false,
            type: ArgType.Enum,
            enum: StageProperty
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    async execute(ctx, [instance, prop]) {
        if (prop) return this.success(StageProperties[prop](instance))
        return this.successJSON(instance)
    },
})