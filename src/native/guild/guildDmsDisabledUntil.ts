import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildDmsDisabledUntil",
    version: "2.2.0",
    description: "Returns the direct messages disabled timestamp of a guild",
    aliases: [
        "$serverDmsDisabledUntil"
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
        return this.success((guild ?? ctx.guild).incidentsData?.dmsDisabledUntil?.getTime() ?? 0)
    },
})