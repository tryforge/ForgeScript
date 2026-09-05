/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "guildScheduledEventCreate",
    version: "1.4.0",
    description: "This event is called when a scheduled event is created",
    listener: async function (m) {
        const commands = this.commands.get("guildScheduledEventCreate")

        for (const command of commands) {
            Interpreter.run({
                obj: m,
                command,
                client: this,
                states: {
                    scheduledEvent: {
                        new: m,
                        old: m
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildScheduledEvents"],
})
