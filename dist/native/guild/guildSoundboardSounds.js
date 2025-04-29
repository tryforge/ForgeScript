"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
const sound_1 = require("../../properties/sound");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Guild,
        },
        {
            name: "property",
            description: "The property of each sound to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: sound_1.SoundboardSoundProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: [
        structures_1.ArgType.Json,
        (0, array_1.default)()
    ],
    async execute(ctx, [guild, prop, sep]) {
        const sounds = await (guild ?? ctx.guild)?.soundboardSounds.fetch().catch(ctx.noop);
        if (sounds && prop)
            return this.success(sounds.map((x) => sound_1.SoundboardSoundProperties[prop](x)).join(sep ?? ", "));
        return this.successJSON(sounds);
    },
});
//# sourceMappingURL=guildSoundboardSounds.js.map