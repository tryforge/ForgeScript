import { ClientEvents, Events } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$commandInfo",
    version: "1.0.3",
    description: "Retrieves command info",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "type",
            description: "The command type",
            type: ArgType.Enum,
            enum: Events,
            rest: false,
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
        const val = cmd.data?.[prop]
        return Return.success(Array.isArray(val) ? val.join(sep || ", ") : val)
    },
})
