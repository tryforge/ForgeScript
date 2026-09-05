"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const setVoiceRegion_1 = require("./setVoiceRegion");
exports.default = new structures_1.NativeFunction({
    name: "$channelVoiceRegion",
    version: "1.5.0",
    description: "Returns the region of a voice channel",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to get its region",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isVoiceBased()
        },
    ],
    output: setVoiceRegion_1.VoiceRegionType,
    execute(ctx, [ch]) {
        const chan = (ch ?? ctx.channel);
        return this.success("rtcRegion" in chan ? chan.rtcRegion : undefined);
    },
});
//# sourceMappingURL=channelVoiceRegion.js.map