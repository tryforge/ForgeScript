"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "autoModerationRuleDelete",
    version: "1.5.0",
    description: "This event is fired when an automod rule is deleted",
    listener: async function (r) {
        const commands = this.commands.get("autoModerationRuleDelete");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: r,
                command,
                client: this,
                states: {
                    automodRule: {
                        new: r,
                        old: r,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["Guilds", "AutoModerationConfiguration"],
});
//# sourceMappingURL=autoModerationRuleDelete.js.map