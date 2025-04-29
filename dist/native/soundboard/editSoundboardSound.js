"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const parseSingleEmoji_1 = require("../../functions/parseSingleEmoji");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Guild,
        },
        {
            name: "sound ID",
            description: "The soundboard sound to edit",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.SoundboardSound,
        },
        {
            name: "name",
            description: "The new name for the sound",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "emoji",
            description: "The new emoji for the sound",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "volume",
            description: "The new volume for the sound (from 0 to 1)",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "reason",
            description: "The reason for editing the sound",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, sound, name, emoji, volume, reason]) {
        const parsed = (0, parseSingleEmoji_1.parseSingleEmoji)(ctx, emoji);
        const value = emoji === "" ? null : undefined;
        return this.success(!!(await sound.edit({
            name: name || undefined,
            emojiId: parsed?.id || value,
            emojiName: parsed?.id ? null : parsed?.name || value,
            volume: typeof (volume) === "number" ? volume : undefined,
            reason: reason || undefined
        }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=editSoundboardSound.js.map