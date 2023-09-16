"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "shardDisconnect",
    version: "1.0.1",
    description: "This event is fired when a shard is disconnected",
    listener: function (event, shardId) {
        const commands = this.commands.get("shardDisconnect");
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
//# sourceMappingURL=shardDisconnect.js.map