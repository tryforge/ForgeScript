import { ArgType, NativeFunction, Return } from "../../structures"
import { parseSingleEmoji } from "../../functions/parseSingleEmoji"

export default new NativeFunction({
    name: "$editSoundboardSound",
    version: "2.4.0",
    description: "Edits given soundboard sound, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to edit soundboard sound on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "sound ID",
            description: "The soundboard sound to edit",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.SoundboardSound,
        },
        {
            name: "name",
            description: "The new name for the sound",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "emoji",
            description: "The new emoji for the sound",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "volume",
            description: "The new volume for the sound (from 0 to 1)",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "reason",
            description: "The reason for editing the sound",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, sound, name, emoji, volume, reason]) {
        const parsed = parseSingleEmoji(ctx, emoji)
        const value = emoji === "" ? null : undefined

        return this.success(!!(await sound.edit({
            name: name || undefined,
            emojiId: parsed?.id || value,
            emojiName: parsed?.id ? null : parsed?.name || value,
            volume: typeof(volume) === "number" ? volume : undefined,
            reason: reason || undefined
        }).catch(ctx.noop)))
    },
})