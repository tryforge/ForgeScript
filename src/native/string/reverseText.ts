import { Arg, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$reverseText",
    version: "1.5.0",
    aliases: ["$reverse"],
    brackets: true,
    unwrap: true,
    description: "Reverses given text",
    args: [
        Arg.requiredString()
    ],
    execute(ctx, [ txt ]) {
        return this.success(txt.split("").reverse().join(""))
    },
})