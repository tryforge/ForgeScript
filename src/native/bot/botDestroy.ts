import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botDestroy",
    category: "bot",
    version: "1.0.0",
    description: "Destroy Client",
    unwrap: true,
    execute(ctx) {
        ctx.client.destroy()
        return this.success()
    },
})
