import { User } from "discord.js"
import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botOwnerID",
    version: "1.0.0",
    description: "Returns the bot owner id",
    brackets: false,
    args: [
        {
            name: "return members",
            description: "Whether to return all members",
            rest: false,
            required: false,
            type: ArgType.Boolean
        },
        {
            name: "separator",
            description: "The separator to use for every id",
            rest: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [ returnAll, sep ]) {
        if (!ctx.client.application.owner) await ctx.client.application.fetch().catch(noop)
        const owner = ctx.client.application.owner
        return this.success(owner ? owner instanceof User ? owner.id : returnAll ? owner.members.map(x => x.id).join(sep ?? ", ") : owner.ownerId : null)
    },
})
