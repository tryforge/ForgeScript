"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const sound_1 = require("../../properties/sound");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Guild,
        },
        {
            name: "sound ID",
            description: "The soundboard sound to get",
            rest: false,
            required: true,
            type: structures_1.ArgType.SoundboardSound,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property of the sound to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: sound_1.SoundboardSoundProperty
        },
    ],
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.Unknown
    ],
    execute(ctx, [, sound, prop]) {
        if (prop)
            return this.success(sound_1.SoundboardSoundProperties[prop](sound));
        return this.successJSON(sound);
    },
});
//# sourceMappingURL=getSoundboardSound.js.map