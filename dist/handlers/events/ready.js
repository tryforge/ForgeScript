"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const structures_1 = require("../../structures");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
const InviteTracker_1 = require("../../structures/trackers/InviteTracker");
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
                    obj: {},
                });
            }
        }
        else {
            structures_1.Logger.info(`Ready on client ${this.user.displayName}`);
        }
        if (this.options.trackers?.invites) {
            await InviteTracker_1.InviteTracker.cacheAll(this);
        }
    },
});
//# sourceMappingURL=ready.js.map