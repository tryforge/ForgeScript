import { BaseChannel, DefaultReactionEmoji, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { parseSingleEmoji } from "../../functions/parseSingleEmoji"

export default new NativeFunction({
    name: "$setDefaultReactionEmoji",
    version: "2.2.0",
    description: "Sets a forum's default reaction emoji for posts",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to modify",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly()
        },
        {
            name: "emoji",
            description: "The new default reaction emoji",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "reason",
            description: "Reason for modifying default emoji",
            rest: false,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ chan, emoji, reason ]) {
        return this.success(!!(await (chan as ThreadOnlyChannel).setDefaultReactionEmoji(
            parseSingleEmoji(ctx, emoji) as DefaultReactionEmoji,
            reason || undefined
        ).catch(ctx.noop)))
    },
})