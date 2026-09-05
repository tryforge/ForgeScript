/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "subscriptionDelete",
    version: "2.5.0",
    description: "This event is fired when a subscription is deleted",
    listener: async function (sub) {
        const commands = this.commands.get("subscriptionDelete")

        for (const command of commands) {
            Interpreter.run({
                obj: sub,
                command,
                client: this,
                states: {
                    subscription: {
                        new: sub,
                        old: sub
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
})