"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const voiceServer_1 = require("../../properties/voiceServer");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$voiceServer",
    version: "2.7.0",
    description: "Retrieves data from an event whose context was a voice server update event",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: voiceServer_1.VoiceServerProperty,
            required: true,
        },
    ],
    execute(ctx, [prop]) {
        return this.success(voiceServer_1.VoiceServerProperties[prop](ctx.states?.voiceServer?.new));
    },
});
//# sourceMappingURL=voiceServer.js.map