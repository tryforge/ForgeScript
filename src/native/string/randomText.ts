import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$randomText",
    category: "string",
    version: "1.0.0",
    description: "Returns a random text (no cache)",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "texts",
            description: "The texts to use",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [texts]) {
        const rnd = texts[Math.floor(Math.random() * texts.length)]
        return this.success(rnd)
    },
})
