import { ClientEvents, Events } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$commandInfo",
    version: "1.0.3",
    description: "Retrieves command info",
    unwrap: true,
    brackets: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "type",
            description: "The command type",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "name",
            description: "The command name",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "property",
            description: "The property to retrieve",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "separator",
            description: "Separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [type, name, prop, sep]) {
        const cmd = ctx.client.commands.get(type as keyof ClientEvents, (x) => x.name === name || !!x.data.aliases?.includes(name))[0]
        if (!cmd) return this.success()
        const val = cmd.data?.[prop]
        return this.success(Array.isArray(val) ? val.join(sep || ", ") : val)
    },
})
