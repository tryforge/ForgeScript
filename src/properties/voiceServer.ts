/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { VoiceServerUpdateData } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum VoiceServerProperty {
    guildID = "guildID",
    endpoint = "endpoint",
    token = "token"
}

export const VoiceServerProperties = defineProperties<typeof VoiceServerProperty, VoiceServerUpdateData>({
    guildID: (i) => i?.guildId,
    endpoint: (i) => i?.endpoint,
    token: (i) => i?.token
})