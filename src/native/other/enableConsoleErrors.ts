import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$enableConsoleErrors",
    version: "1.4.0",
    description: "Enables possible outcoming errors that are output to console",
    unwrap: false,
    execute(ctx) {
        ctx.runtime.disableConsoleErrors = false
        return this.success()
    },
})