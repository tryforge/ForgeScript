import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildName",
    category: "guild",
    version: "1.0.0",
    description: "Sets a guild name, returns boolean",
    unwrap: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            type: ArgType.Guild,
            required: true,
            description: "The guild to set name",
        },
        {
            name: "name",
            description: "The new name",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(_, [guild, name]) {
        return this.success((await guild.setName(name).catch(() => false)) !== false)
    },
})
