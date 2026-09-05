"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "voiceServerUpdate",
    version: "2.7.0",
    description: "This event is fired when a voice server is updated",
    listener: async function (data) {
        const commands = this.commands.get("voiceServerUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
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
            });
        }
    },
    intents: ["GuildVoiceStates"],
});
//# sourceMappingURL=voiceServerUpdate.js.map