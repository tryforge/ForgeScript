"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "shardReady",
    version: "1.0.1",
    description: "Event is executed when a shard of this bot becomes ready",
    listener: function (shardId) {
        const commands = this.commands.get("shardReady");
        if (commands.length) {
            for (const command of commands) {
                core_1.Interpreter.run({
                    client: this,
                    command,
                    extras: shardId,
                    data: command.compiled.code,
                    obj: null,
                });
            }
        }
    },
});
//# sourceMappingURL=shardReady.js.map