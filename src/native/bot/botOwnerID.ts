import { User } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$botOwnerID",
    version: "1.0.0",
    description: "Returns the bot's owner id or team members",
    brackets: false,
    aliases: [
        "$clientOwnerID"
    ],
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
    output: array<ArgType.User>(),
    unwrap: true,
    async execute(ctx, [ returnAll, sep ]) {
        if (!ctx.client.application.owner) await ctx.client.application.fetch().catch(ctx.noop)
        const owner = ctx.client.application.owner
        return this.success(owner ? owner instanceof User ? owner.id : returnAll ? owner.members.map(x => x.id).join(sep ?? ", ") : owner.ownerId : null)
    },
})