import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildRaidDetectedAt",
    version: "2.2.0",
    description: "Returns when a raid was detected on a guild",
    aliases: [
        "$serverRaidDetectedAt"
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
        return this.success((guild ?? ctx.guild).incidentsData?.raidDetectedAt?.getTime() ?? 0)
    },
})