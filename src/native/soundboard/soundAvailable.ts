import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$soundAvailable",
    version: "2.4.0",
    description: "Returns whether a sound is available",
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
            description: "The sound to return its available status",
            rest: false,
            required: true,
            type: ArgType.SoundboardSound,
            pointer: 0,
        },
    ],
    output: ArgType.Boolean,
    execute(ctx, [, sound]) {
        sound ??= ctx.sound!
        return this.success(sound?.available)
    },
})