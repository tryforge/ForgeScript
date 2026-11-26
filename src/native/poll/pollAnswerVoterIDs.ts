/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import array from "../../functions/array"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$pollAnswerVoterIDs",
    version: "1.5.0",
    description: "Can only be used in poll events, returns the vote user ids of this poll answer",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use for every id",
            rest: false,
            type: ArgType.String
        }
    ],
    output: array<ArgType.User>(),
    async execute(ctx, [ sep ]) {
        const answer = ctx.states?.poll?.new
        if (!answer) return this.success()

        const ids: string[] = []
        let after: string | undefined
        do {
            const voters = await answer.voters.fetch({ limit: 100, after }).catch(ctx.noop)
            if (!voters) break
            ids.push(...voters.keys())
            after = voters.size === 100 ? voters.lastKey() : undefined
        } while (after)

        return this.success(ids.join(sep ?? ", "))
    },
})