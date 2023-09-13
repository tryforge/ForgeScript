import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$commandName",
    version: "1.0.3",
    description: "Returns the current command name",
    unwrap: true,
    execute(ctx) {
        return Return.success(ctx.runtime.command?.name ?? (ctx.obj && "commandName" in ctx.obj ? ctx.obj.commandName : undefined))
    }
})