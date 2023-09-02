import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$setGuildName",
    version: "1.0.0",
    description: "Sets a guild name, returns boolean",
    unwrap: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            type: ArgType.Guild,
            required: true,
            description: "The guild to set name"
        },
        {
            name: "name",
            description: "The new name",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    async execute(ctx, [ guild, name ]) {
        return Return.success(
            await guild.setName(name).catch(() => false) !== false
        ) 
    },
})