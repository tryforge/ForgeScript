"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "debug",
    version: "1.0.1",
    description: "This event is fired when discord.js sends out debug info",
    listener: function (debug) {
        const commands = this.commands.get("debug");
        if (commands.length) {
            for (const command of commands) {
                core_1.Interpreter.run({
                    client: this,
                    command,
                    data: command.compiled.code,
                    obj: null,
                    extras: debug,
                });
            }
        }
    },
});
//# sourceMappingURL=debug.js.map