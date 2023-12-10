"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "interactionCreate",
    version: "1.0.1",
    description: "This event is fired every time a user uses a slash command, context menu, button, etc",
    listener: async function (i) {
        if (i.isCommand()) {
            const command = this.applicationCommands.get(i);
            if (command) {
                core_1.Interpreter.run({
                    client: this,
                    command: null,
                    data: command.compiled,
                    obj: i,
                });
            }
            return;
        }
        const commands = this.commands.get("interactionCreate", cmd => cmd.matchesInteractionType(i));
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: i,
                command,
                client: this,
                data: command.compiled.code,
                args: [],
            });
        }
    },
});
//# sourceMappingURL=interactionCreate.js.map