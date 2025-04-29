"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$soundCreatedAt",
    version: "2.4.0",
    description: "Returns the creation timestamp of a sound",
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
            description: "The sound to return its creation timestamp",
            rest: false,
            required: true,
            type: structures_1.ArgType.SoundboardSound,
            pointer: 0,
        },
    ],
    output: structures_1.ArgType.Number,
    execute(ctx, [, sound]) {
        sound ??= ctx.sound;
        return this.success(sound?.createdTimestamp);
    },
});
//# sourceMappingURL=soundCreatedAt.js.map