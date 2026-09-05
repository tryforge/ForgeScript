/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "voiceServerUpdate",
    version: "2.7.0",
    description: "This event is fired when a voice server is updated",
    listener: async function (data) {
        const commands = this.commands.get("voiceServerUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: data,
                command,
                client: this,
                states: {
                    voiceServer: {
                        new: data,
                        old: data
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildVoiceStates"],
})
