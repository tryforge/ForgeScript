/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { GuildScheduledEvent } from "discord.js"
import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "guildScheduledEventUserAdd",
    version: "1.4.0",
    description: "This event is called when a user is added to a scheduled event",
    listener: async function (m, user) {
        const commands = this.commands.get("guildScheduledEventUserAdd")

        for (const command of commands) {
            Interpreter.run({
                obj: user,
                command,
                client: this,
                states: {
                    scheduledEvent: {
                        new: m as GuildScheduledEvent,
                        old: m as GuildScheduledEvent
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildScheduledEvents"],
})
