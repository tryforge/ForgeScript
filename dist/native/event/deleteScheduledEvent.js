"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteScheduledEvent",
    version: "2.6.0",
    description: "Deletes a scheduled event from a guild, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to delete scheduled event from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "event ID",
            description: "The scheduled event to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.ScheduledEvent,
            pointer: 0,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, event]) {
        try {
            await event.delete();
        }
        catch (error) {
            ctx.noop(error);
            return this.success(false);
        }
        return this.success(true);
    },
});
//# sourceMappingURL=deleteScheduledEvent.js.map