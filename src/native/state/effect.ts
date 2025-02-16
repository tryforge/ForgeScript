import { VoiceEffectProperties, VoiceEffectProperty } from "../../properties/voiceEffect"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$effect",
    version: "2.3.0",
    description: "Retrieves data from an event whose context was a voice channel effect event",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: VoiceEffectProperty,
            required: true,
        },
    ],
    execute(ctx, [prop]) {
        return this.success(VoiceEffectProperties[prop](ctx.states?.voiceEffect?.new))
    },
})