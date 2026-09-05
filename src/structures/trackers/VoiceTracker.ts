/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ForgeClient } from "../../core"
import { Logger } from "../@internal/Logger"

export class VoiceTracker {
    private constructor() {}

    private static init(client: ForgeClient) {
        Logger.warn("The Voice Tracker is still beta, correct functionality is not guaranteed")
    }
}