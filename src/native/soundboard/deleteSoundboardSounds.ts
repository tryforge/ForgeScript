import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteSoundboardSounds",
    version: "2.4.0",
    description: "Deletes given soundboard sounds, returns the count of sounds deleted",
    aliases: ["$deleteSoundboardSound"],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to delete soundboard sounds from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "sounds",
            description: "The soundboard sounds to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: ArgType.SoundboardSound,
        },
    ],
    output: ArgType.Number,
    async execute(ctx, [, sounds]) {
        let count = 0
        for (let i = 0, len = sounds.length; i < len; i++) {
            const sound = sounds[i]
            const success = await sound.delete().then(x => true).catch(ctx.noop)
            if (success) count++
        }

        return this.success(count)
    },
})