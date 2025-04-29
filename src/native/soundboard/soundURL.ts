import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$soundURL",
    version: "2.4.0",
    description: "Returns the url of a sound",
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
            description: "The sound to return its url",
            rest: false,
            required: true,
            type: ArgType.SoundboardSound,
            pointer: 0,
        },
    ],
    output: ArgType.String,
    execute(ctx, [, sound]) {
        sound ??= ctx.sound!
        return this.success(sound?.url)
    },
})