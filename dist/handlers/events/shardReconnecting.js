"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "shardReconnecting",
    version: "1.0.1",
    listener: function (shardId) {
        const commands = this.commands.get("shardReconnecting");
        if (commands.length) {
            for (const command of commands) {
                core_1.Interpreter.run({
                    client: this,
                    command,
                    extras: shardId,
                    data: command.compiled.code,
                    obj: {},
                });
            }
        }
    },
    description: "This event is fired when a shard starts reconnecting",
});
//# sourceMappingURL=shardReconnecting.js.map