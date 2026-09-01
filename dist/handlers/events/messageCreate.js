"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Interpreter_1 = require("../../core/Interpreter");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "messageCreate",
    version: "1.0.1",
    description: "This event is fired when someone sends a message",
    listener: async function (message) {
        const prefix = await this.getPrefix(message);
        const content = message.content.trim();
        const hasPrefix = prefix !== null;
        const rawArgs = (hasPrefix ? content.slice(prefix.length) : content).trim().split(/ +/g);
        const name = rawArgs[0]?.toLowerCase();
        const commands = this.commands.get("messageCreate").filter(
        // Allow always execute commands
        (cmd) => !cmd.name ||
            ( // Check if it matches the command name or one of aliases
            (cmd.name === name || !!cmd.data.aliases?.includes(name)) &&
                // If unprefixed there can be no prefix
                (cmd.data.unprefixed ? true : hasPrefix)));
        for (const command of commands) {
            const args = command.name ? rawArgs.slice(1) : rawArgs;
            Interpreter_1.Interpreter.run({
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
            });
        }
    },
    intents: ["GuildMessages", "DirectMessages"],
});
//# sourceMappingURL=messageCreate.js.map