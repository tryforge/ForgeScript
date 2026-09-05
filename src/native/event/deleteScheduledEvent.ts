/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.Guild,
        },
        {
            name: "event ID",
            description: "The scheduled event to delete",
            rest: false,
            required: true,
            type: ArgType.ScheduledEvent,
            pointer: 0,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, event]) {
        try {
            await event.delete()
        } catch (error) {
            ctx.noop(error)
            return this.success(false)
        }

        return this.success(true)
    },
})