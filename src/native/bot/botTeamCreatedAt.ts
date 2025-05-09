import { Team } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botTeamCreatedAt",
    version: "2.4.0",
    description: "Returns the client's team creation timestamp",
    aliases: [
        "$clientTeamCreatedAt"
    ],
    unwrap: false,
    output: ArgType.Number,
    async execute(ctx) {
        if (!ctx.client.application.owner) await ctx.client.application.fetch().catch(ctx.noop)
        const owner = ctx.client.application.owner
        return this.success(owner instanceof Team ? owner.createdTimestamp : null)
    },
})