import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteInvite",
    brackets: true,
    description: "Deletes an invite, returns the code",
    unwrap: true,
    args: [
        {
            name: "code",
            description: "The invite code",
            rest: false,
            required: true,
            type: ArgType.Invite
        }
    ],
    async execute(ctx, [ invite ]) {
        return Return.success(
            !!(await invite.delete().catch(noop))
        )
    }
})