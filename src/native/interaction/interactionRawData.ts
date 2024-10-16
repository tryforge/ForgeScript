import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$interactionRawData",
    version: "1.5.0",
    description: "Returns the raw data of this interaction",
    unwrap: false,
    output: ArgType.Json,
    execute(ctx) {
        return this.successJSON(ctx.interaction?.toJSON())
    },
})