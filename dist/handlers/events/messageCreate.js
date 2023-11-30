"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Interpreter_1 = require("../../core/Interpreter");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "messageCreate",
    version: "1.0.1",
    description: "This event is fired when someone sends a message",
    listener: async function (message) {
        const prefix = this.options.prefixes.find((x) => message.content.startsWith(x));
        const args = message.content
            .slice(prefix?.length ?? 0)
            .trim()
            .split(/ +/g);
        const name = prefix ? args.shift()?.toLowerCase() : args[0];
        const commands = this.commands.get("messageCreate").filter(
        // Allow always execute commands
        (cmd) => !cmd.name ||
            ( // Check if it matches the command name or one of aliases
            (cmd.name === name || !!cmd.data.aliases?.includes(name)) &&
                // If unprefixed there can be no prefix
                (cmd.data.unprefixed ? true : !!prefix)));
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
    intents: ["GuildMessages", "DirectMessages"],
});
//# sourceMappingURL=messageCreate.js.map