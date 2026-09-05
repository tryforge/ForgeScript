"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "subscriptionDelete",
    version: "2.5.0",
    description: "This event is fired when a subscription is deleted",
    listener: async function (sub) {
        const commands = this.commands.get("subscriptionDelete");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: sub,
                command,
                client: this,
                states: {
                    subscription: {
                        new: sub,
                        old: sub
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
});
//# sourceMappingURL=subscriptionDelete.js.map