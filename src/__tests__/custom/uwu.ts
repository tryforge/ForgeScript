import { NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"

export default new NativeFunction({
    name: "$guildName",
    description: "A uwu function that overrides $guildName",
    unwrap: true,
    execute(ctx) {
        return this.success("uwu!")
    },
})
