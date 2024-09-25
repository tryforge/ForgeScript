import { MessageType } from "discord.js"
import { Arg, NativeFunction } from "../../structures"
import { customImport } from "../../functions/customImport"

export default new NativeFunction({
    name: "$test",
    version: "1.4.0",
    description: "This is just a test function",
    unwrap: true,
    brackets: true,
    deprecated: true,
    experimental: true,
    args: [
        Arg.requiredString("test")
    ],
    async execute(ctx, args) {
        const imported = await customImport(args[0])
        console.log(imported)
        return this.success()
    },
})