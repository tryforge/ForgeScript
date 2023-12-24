"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
const InviteTracker_1 = require("../../structures/trackers/InviteTracker");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildCreate",
    version: "1.0.1",
    description: "This event is fired when the bot is added to a guild",
    listener: async function (g) {
        if (this.options.trackers?.invites)
            await InviteTracker_1.InviteTracker.cache(g);
        const commands = this.commands.get("guildCreate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: g,
                command,
                client: this,
                states: {
                    guild: {
                        new: g,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["Guilds"],
});
//# sourceMappingURL=guildCreate.js.map