import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$applicationCommandDisplay",
    version: "1.4.0",
    description: "Gets the full command interaction with all options",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.client.applicationCommands.getDisplay(ctx.interaction))
    },
})