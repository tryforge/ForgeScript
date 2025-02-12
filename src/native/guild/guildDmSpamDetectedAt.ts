import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildDmSpamDetectedAt",
    version: "2.2.0",
    description: "Returns when a direct message spam was detected on a guild",
    aliases: [
        "$serverDmSpamDetectedAt"
    ],
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    output: ArgType.Number,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild).incidentsData?.dmSpamDetectedAt?.getTime() ?? 0)
    },
})