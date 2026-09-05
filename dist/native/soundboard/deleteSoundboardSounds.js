"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Guild,
        },
        {
            name: "sounds",
            description: "The soundboard sounds to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.SoundboardSound,
        },
    ],
    output: structures_1.ArgType.Number,
    async execute(ctx, [, sounds]) {
        let count = 0;
        for (let i = 0, len = sounds.length; i < len; i++) {
            const sound = sounds[i];
            const success = await sound.delete(ctx.reason).then(x => true).catch(ctx.noop);
            if (success)
                count++;
        }
        return this.success(count);
    },
});
//# sourceMappingURL=deleteSoundboardSounds.js.map