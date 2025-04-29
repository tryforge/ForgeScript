import { SoundboardSoundProperties, SoundboardSoundProperty } from "../../properties/sound"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$oldSound",
    version: "2.4.0",
    description: "Retrieves old data from an event whose context was a soundboard sound instance",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: SoundboardSoundProperty,
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
        return this.success(SoundboardSoundProperties[prop](ctx.states?.soundboardSound?.old, sep))
    },
})