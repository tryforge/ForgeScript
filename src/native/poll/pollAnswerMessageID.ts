/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$pollAnswerMessageID",
    version: "1.5.0",
    description: "Can only be used in poll events, returns the message id of the poll answer",
    unwrap: false,
    output: ArgType.Message,
    execute(ctx) {
        return this.success(ctx.states?.poll?.new?.poll.message.id)
    },
})