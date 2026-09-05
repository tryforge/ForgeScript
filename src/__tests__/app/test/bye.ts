/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ApplicationCommandOptionType } from "discord.js"
import { ApplicationCommand } from "../../../structures"

export default {
    code: "ok! $applicationCommandDisplay",
    data: {
        name: "sure",
        description: "bye",
        options: [
            {
                name: "hi",
                description: "tmr",
                type: ApplicationCommandOptionType.String,
                required: false
            }
        ]
    }
}