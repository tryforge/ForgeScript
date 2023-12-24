import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$createInvite",
    category: "unknown",
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
            check: (i: BaseChannel) => !i.isDMBased(),
        },
        {
            name: "max uses",
            description: "The max amount of uses for this invite",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "reason",
            description: "The reason for creating this invite",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ch, maxUses, reason]) {
        const channel = (ch ?? ctx.channel) as TextChannel
        const invite = await channel
            .createInvite({
                reason: reason || undefined,
                maxUses: maxUses || undefined,
            })
            .catch(noop)

        return this.success(invite ? invite.code : undefined)
    },
})
