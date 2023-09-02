import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$setGuildSplash",
    version: "1.0.0",
    description: "Sets a guild splash, returns boolean",
    unwrap: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            type: ArgType.Guild,
            required: true,
            description: "The guild to set splash on"
        },
        {
            name: "url",
            description: "The new splash",
            rest: false,
            type: ArgType.String
        }
    ],
    brackets: true,
    async execute(ctx, [ guild, icon ]) {
        return Return.success(
            await guild.setSplash(icon || null).catch(() => false) !== false
        ) 
    },
})