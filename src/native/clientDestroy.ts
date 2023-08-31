import { NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$clientDestroy",
    description: "Destroy Client",
    unwrap: true,
    execute(ctx) {
        ctx.client.destroy()
    },
})
