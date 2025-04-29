import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"
import { SoundboardSoundProperties, SoundboardSoundProperty } from "../../properties/sound"

export default new NativeFunction({
    name: "$guildSoundboardSounds",
    version: "2.4.0",
    description: "Returns all soundboard sounds of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get soundboard sounds from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "property",
            description: "The property of each sound to return",
            rest: false,
            type: ArgType.Enum,
            enum: SoundboardSoundProperty
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
        const sounds = await (guild ?? ctx.guild)?.soundboardSounds.fetch().catch(ctx.noop)
        if (sounds && prop) return this.success(sounds.map((x) => SoundboardSoundProperties[prop](x)).join(sep ?? ", "))
        return this.successJSON(sounds)
    },
})