/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "webhooksUpdate",
    version: "2.5.0",
    description: "This event is fired when a webhook is updated",
    listener: async function (c) {
        const commands = this.commands.get("webhooksUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: c,
                command,
                client: this,
                states: {
                    channel: {
                        new: c,
                        old: c
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildWebhooks"],
})