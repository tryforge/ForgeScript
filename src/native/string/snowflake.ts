import { SnowflakeUtil } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$snowflake",
    version: "1.4.0",
    description: "Generates a snowflake, this value will never clash",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(SnowflakeUtil.generate().toString())
    },
})