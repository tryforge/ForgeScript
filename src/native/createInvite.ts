import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$createInvite",
    version: "1.0.0",
    brackets: true,
    description: "Creates an invite, returns the code",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to make the invite for",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => !i.isDMBased()
        },
        {
            name: "max uses",
            description: "The max amount of uses for this invite",
            rest: false,
            type: ArgType.Number
        }
    ],
    async execute(ctx, [ ch, maxUses ]) {
        const channel = (ch ?? ctx.channel) as TextChannel
        const invite = await channel.createInvite({
            maxUses: maxUses || undefined
        }).catch(noop)

        return Return.success(
            invite ? invite.code : undefined
        )
    }
})