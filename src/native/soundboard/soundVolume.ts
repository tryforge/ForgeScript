import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$soundVolume",
    version: "2.4.0",
    description: "Returns the volume of a sound",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get sound from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "sound ID",
            description: "The sound to return its volume",
            rest: false,
            required: true,
            type: ArgType.SoundboardSound,
            pointer: 0,
        },
    ],
    output: ArgType.Number,
    execute(ctx, [, sound]) {
        sound ??= ctx.sound!
        return this.success(sound?.volume)
    },
})