/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Interpreter } from "../../core/Interpreter"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "messageCreate",
    version: "1.0.2",
    description: "This event is fired when someone sends a message",
    listener: async function (message) {
        const prefix = await this.getPrefix(message)
        const content = message.content.trim()
        const hasPrefix = prefix !== null
        const rawArgs = (hasPrefix ? content.slice(prefix!.length) : content).trim().split(/ +/g)
        const name = rawArgs[0]?.toLowerCase()

        const commands = this.commands.get("messageCreate").filter(
            (cmd) =>
                // Allow always execute commands
                !cmd.name ||
                // Check if it matches the command name or one of aliases
                ((cmd.name === name || !!cmd.data.aliases?.includes(name!)) &&
                    // If unprefixed there can be no prefix
                    (cmd.data.unprefixed ? true : hasPrefix))
        )

        for (const command of commands) {
            const args = command.name ? rawArgs.slice(1) : rawArgs

            Interpreter.run({
                obj: message,
                command,
                client: this,
                states: {
                    message: {
                        new: message,
                    },
                },
                data: command.compiled.code,
                args,
            })
        }
    },
    intents: ["GuildMessages", "DirectMessages", "MessageContent"],
})