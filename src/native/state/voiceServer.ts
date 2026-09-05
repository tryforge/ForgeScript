/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { VoiceServerProperties, VoiceServerProperty } from "../../properties/voiceServer"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$voiceServer",
    version: "2.7.0",
    description: "Retrieves data from an event whose context was a voice server update event",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: VoiceServerProperty,
            required: true,
        },
    ],
    execute(ctx, [prop]) {
        return this.success(VoiceServerProperties[prop](ctx.states?.voiceServer?.new))
    },
})