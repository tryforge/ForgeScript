import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botDestroy",
    version: "1.0.0",
    aliases: [
        "$clientDestroy"
    ],
    description: "Destroys the discord.js client",
    unwrap: true,
    execute(ctx) {
        ctx.client.destroy()
        return this.success()
    },
})
