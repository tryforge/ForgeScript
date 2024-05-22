"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "entitlementCreate",
    version: "1.5.0",
    description: "This event is fired when an entitlement is created",
    listener: async function (en) {
        const commands = this.commands.get("entitlementCreate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: en,
                command,
                client: this,
                states: {
                    entitlement: {
                        new: en,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    }
});
//# sourceMappingURL=entitlementCreate.js.map