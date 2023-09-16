"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "roleDelete",
    version: "1.0.1",
    listener: async function (old) {
        const commands = this.commands.get("roleDelete");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: old,
                command,
                client: this,
                states: {
                    role: {
                        old,
                        new: old,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    description: "This event is fired when a role is deleted",
    intents: ["Guilds"],
});
//# sourceMappingURL=roleDelete.js.map