/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { GuildScheduledEvent } from "discord.js"
import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "guildScheduledEventUpdate",
    version: "1.4.0",
    description: "This event is called when a scheduled event is updated",
    listener: async function (old, now) {
        const commands = this.commands.get("guildScheduledEventUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: now,
                command,
                client: this,
                states: {
                    scheduledEvent: {
                        new: now,
                        old: old as GuildScheduledEvent
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildScheduledEvents"],
})
