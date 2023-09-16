"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "roleCreate",
    version: "1.0.1",
    listener: async function (m) {
        const commands = this.commands.get("roleCreate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: m,
                command,
                client: this,
                states: {
                    role: {
                        old: m,
                        new: m,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    description: "This event is fired when a role is created",
    intents: ["Guilds"],
});
//# sourceMappingURL=roleCreate.js.map