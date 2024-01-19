import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$loadGuildContext",
    version: "1.4.0",
    aliases: [
        "$useGuildContext",
        "$asGuildContext"
    ],
    brackets: true,
    description: "Loads a guild instance to the current context, this is not reversible and is adviced to use with $scope.",
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to adapt context with",
            rest: false,
            required: true,
            type: ArgType.Guild
        }
    ],
    execute(ctx, [ g ]) {
        ctx.obj = g
        return this.success()
    },
})