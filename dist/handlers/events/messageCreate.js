"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Interpreter_1 = require("../../core/Interpreter");
const structures_1 = require("../../structures");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "messageCreate",
    version: "1.0.1",
    description: "This event is fired when someone sends a message",
    listener: async function (message) {
        const prefix = await this.getPrefix(message);
        const args = message.content
            .trim()
            .slice(prefix?.length ?? 0)
            .trim()
            .split(/ +/g);
        const rawName = prefix ? args.shift() : args[0];
        const commands = this.commands.get("messageCreate").filter((cmd) => {
            const ignoreCase = cmd.data.nameCaseInsensitive !== false;
            const name = ignoreCase ? rawName?.toLowerCase() : rawName;
            const cmdName = ignoreCase ? cmd.name?.toLowerCase() : cmd.name;
            const aliases = ignoreCase ? cmd.data.aliases?.map((x) => x.toLowerCase()) : cmd.data.aliases;
            const mode = cmd.data.prefixMode ?? (cmd.data.unprefixed ? structures_1.PrefixMode.None : structures_1.PrefixMode.Required);
            const prefixMatches = mode === structures_1.PrefixMode.Optional
                ? true
                // If unprefixed there can be no prefix
                : mode === structures_1.PrefixMode.None
                    ? !prefix
                    : !!prefix;
            // Allow always execute commands
            return !cmd.name || (
            // Check if it matches the command name or one of aliases
            (cmdName === name || !!aliases?.includes(name)) &&
                prefixMatches);
        });
        for (const command of commands) {
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
    intents: ["GuildMessages", "DirectMessages", "MessageContent"],
});
//# sourceMappingURL=messageCreate.js.map