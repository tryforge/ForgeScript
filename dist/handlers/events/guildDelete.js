"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
const InviteTracker_1 = require("../../structures/trackers/InviteTracker");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildDelete",
    version: "1.0.1",
    description: "This event is fired when a guild is deleted",
    intents: ["Guilds"],
    listener: async function (g) {
        if (this.options.trackers?.invites)
            InviteTracker_1.InviteTracker.uncache(g);
        const commands = this.commands.get("guildDelete");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: g,
                command,
                client: this,
                states: {
                    guild: {
                        new: g,
                        old: g,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
});
//# sourceMappingURL=guildDelete.js.map