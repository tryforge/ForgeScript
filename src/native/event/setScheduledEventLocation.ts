/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.String,
        },
    ],
    execute(ctx, [location]) {
        ctx.scheduledEvent.entityMetadata ??= {}
        ctx.scheduledEvent.entityMetadata.location = location
        return this.success()
    },
})