import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$tts",
    version: "1.5.0",
    description: "Marks the response as Text-To-Speech",
    unwrap: false,
    execute(ctx) {
        ctx.container.tts = true
        return this.success()
    },
})