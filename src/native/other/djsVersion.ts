import { version } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$djsVersion",
    version: "2.2.0",
    description: "Returns the discord.js version used",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(version)
    }
})