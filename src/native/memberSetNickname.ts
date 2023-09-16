import { noop } from "lodash"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$memberSetNickname",
    version: "1.0.7",
    description: "Edits a member's nickname",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to edit its nickname",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.Member,
        },
        {
            name: "nickname",
            description: "The new nickname, leave empty to reset",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [, m, nick]) {
        return Return.success(!!(await m.setNickname(nick).catch(noop || null)))
    },
})
