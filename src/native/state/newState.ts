import { VoiceStateProperties, VoiceStateProperty } from "../../properties/voiceState"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$newState",
    category: "state",
    version: "1.0.0",
    description: "Retrieves new data from an event whose context was a voice state instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: VoiceStateProperty,
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
        return this.success(VoiceStateProperties[prop](ctx.states?.voiceState?.new, sep))
    },
})
