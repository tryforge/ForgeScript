import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$soundGuildID",
    version: "2.4.0",
    description: "Returns the guild id of a sound",
    unwrap: false,
    output: ArgType.Guild,
    execute(ctx) {
        return this.success(ctx.sound?.guildId)
    },
})