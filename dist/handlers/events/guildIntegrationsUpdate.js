"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildIntegrationsUpdate",
    version: "2.5.0",
    description: "This event is fired when an integration is updated on a guild",
    listener: async function (g) {
        const commands = this.commands.get("guildIntegrationsUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
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
            });
        }
    },
    intents: ["GuildIntegrations"],
});
//# sourceMappingURL=guildIntegrationsUpdate.js.map