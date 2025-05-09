import { Team } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botTeamName",
    version: "2.4.0",
    description: "Returns the client's team name",
    aliases: [
        "$clientTeamName"
    ],
    unwrap: false,
    output: ArgType.String,
    async execute(ctx) {
        if (!ctx.client.application.owner) await ctx.client.application.fetch().catch(ctx.noop)
        const owner = ctx.client.application.owner
        return this.success(owner instanceof Team ? owner.name : null)
    },
})