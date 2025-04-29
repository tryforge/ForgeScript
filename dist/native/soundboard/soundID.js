"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$soundID",
    version: "2.4.0",
    description: "Returns a sound id with given name",
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
            name: "name",
            description: "The sound name to return its id",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.SoundboardSound,
    async execute(ctx, [guild, args]) {
        if (this.hasFields) {
            const name = args.join(";");
            const sounds = await guild.soundboardSounds.fetch().catch(ctx.noop);
            return this.success(sounds?.find((x) => x.name === name)?.soundId);
        }
        return this.success(ctx.sound?.soundId);
    },
});
//# sourceMappingURL=soundID.js.map