/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "guildIntegrationsUpdate",
    version: "2.5.0",
    description: "This event is fired when an integration is updated on a guild",
    listener: async function (g) {
        const commands = this.commands.get("guildIntegrationsUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: g,
                command,
                client: this,
                states: {
                    guild: {
                        new: g,
                        old: g
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildIntegrations"],
})