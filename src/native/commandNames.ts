import { ClientEvents } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$commandNames",
    version: "1.0.6",
    description: "Return commands with given type",
    brackets: true,
    args: [
        {
            name: "type",
            description: "The command type to pull names from",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "separator",
            description: "The separator to use for every name",
            rest: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [ type, sep ]) {
        return Return.success(ctx.client.commands.get(type as keyof ClientEvents).map(x => x.name).filter(Boolean).join(sep || ", "))
    }
})