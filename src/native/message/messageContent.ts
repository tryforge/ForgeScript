import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"

export default new NativeFunction({
    name: "$messageContent",
    version: "1.4.0",
    description: "Retrieves the content of the message",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.message?.content)
    },
})
