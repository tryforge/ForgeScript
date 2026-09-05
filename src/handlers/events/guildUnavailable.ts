/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "guildUnavailable",
    version: "1.4.0",
    description: "This event is fired when a guild becomes unavailable",
    listener: async function (g) {
        const commands = this.commands.get("guildUnavailable")

        for (const command of commands) {
            Interpreter.run({
                obj: g,
                command,
                client: this,
                states: {
                    guild: {
                        new: g,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["Guilds"],
})
