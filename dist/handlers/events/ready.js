"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
const InviteSystem_1 = require("../../structures/InviteSystem");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "ready",
    version: "1.0.1",
    description: "This event is fired when the bot becomes ready",
    listener: async function () {
        const commands = this.commands.get("ready");
        if (commands.length) {
            for (const command of commands) {
                core_1.Interpreter.run({
                    client: this,
                    command,
                    data: command.compiled.code,
                    obj: null,
                });
            }
        }
        else {
            console.log(`Ready on client ${this.user.displayName}`);
        }
        if (this.options.useInviteSystem) {
            await InviteSystem_1.InviteSystem.cacheAll(this);
        }
    },
});
//# sourceMappingURL=ready.js.map