"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setScheduledEventLocation",
    version: "2.6.0",
    description: "Sets a location for the current scheduled event",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "location",
            description: "The location of the scheduled event",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [location]) {
        ctx.scheduledEvent.entityMetadata ??= {};
        ctx.scheduledEvent.entityMetadata.location = location;
        return this.success();
    },
});
//# sourceMappingURL=setScheduledEventLocation.js.map