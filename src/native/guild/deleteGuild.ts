import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteGuild",
    version: "1.5.0",
    description: "Deletes a guild, returns bool",
    aliases: [
        "$deleteServer"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to delete",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild]) {
        return this.success((await guild?.delete().catch(() => false)) !== false)
    },
})