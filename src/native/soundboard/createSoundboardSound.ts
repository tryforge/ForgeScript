import { ArgType, NativeFunction, Return } from "../../structures"
import { readFileSync } from "node:fs"
import { parseSingleEmoji } from "../../functions/parseSingleEmoji"

export default new NativeFunction({
    name: "$createSoundboardSound",
    version: "2.4.0",
    description: "Creates a new soundboard sound, returns sound id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create soundboard sound on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "name",
            description: "The name for the sound",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "file",
            description: "The file for the sound",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "emoji",
            description: "The emoji for the sound",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "volume",
            description: "The volume for the sound (from 0 to 1)",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "reason",
            description: "The reason for creating the sound",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.SoundboardSound,
    async execute(ctx, [guild, name, file, emoji, volume, reason]) {
        const parsed = parseSingleEmoji(ctx, emoji)

        let soundFile
        try {
            soundFile = readFileSync(file)
        } catch {
            soundFile = file
        }

        const sound = await guild.soundboardSounds.create({
            name,
            file: soundFile,
            emojiId: parsed?.id || undefined,
            emojiName: parsed?.id ? undefined : parsed?.name || undefined,
            volume: typeof(volume) === "number" ? volume : undefined,
            reason: reason || undefined
        }).catch(ctx.noop)

        return this.success(sound?.soundId)
    },
})