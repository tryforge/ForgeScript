"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "sound ID",
            description: "The sound to return its available status",
            rest: false,
            required: true,
            type: structures_1.ArgType.SoundboardSound,
            pointer: 0,
        },
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [, sound]) {
        sound ??= ctx.sound;
        return this.success(sound?.available);
    },
});
//# sourceMappingURL=soundAvailable.js.map