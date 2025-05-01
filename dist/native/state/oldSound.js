"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sound_1 = require("../../properties/sound");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$oldSound",
    version: "2.4.0",
    description: "Retrieves old data from an event whose context was a soundboard sound instance",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: sound_1.SoundboardSoundProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(sound_1.SoundboardSoundProperties[prop](ctx.states?.soundboardSound?.old, sep));
    },
});
//# sourceMappingURL=oldSound.js.map