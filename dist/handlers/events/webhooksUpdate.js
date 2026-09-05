"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "webhooksUpdate",
    version: "2.5.0",
    description: "This event is fired when a webhook is updated",
    listener: async function (c) {
        const commands = this.commands.get("webhooksUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
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
            });
        }
    },
    intents: ["GuildWebhooks"],
});
//# sourceMappingURL=webhooksUpdate.js.map