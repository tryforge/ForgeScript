import { NativeFunction } from "../../structures/NativeFunction"
import { Return } from "../../structures/Return"

export default new NativeFunction({
    name: "$uwu",
    description: "A uwu function",
    unwrap: true,
    execute(ctx) {
        return Return.success("uwu!")
    }
})