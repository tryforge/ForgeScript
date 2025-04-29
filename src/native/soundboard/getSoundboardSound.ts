import { ArgType, NativeFunction, Return } from "../../structures"
import { SoundboardSoundProperties, SoundboardSoundProperty } from "../../properties/sound"

export default new NativeFunction({
    name: "$getSoundboardSound",
    version: "2.4.0",
    description: "Returns a soundboard sound of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get soundboard sound from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "sound ID",
            description: "The soundboard sound to get",
            rest: false,
            required: true,
            type: ArgType.SoundboardSound,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property of the sound to return",
            rest: false,
            type: ArgType.Enum,
            enum: SoundboardSoundProperty
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [, sound, prop]) {
        if (prop) return this.success(SoundboardSoundProperties[prop](sound))
        return this.successJSON(sound)
    },
})