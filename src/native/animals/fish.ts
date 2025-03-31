import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$fish",
    version: "2.3.0",
    description: "Returns a random fish",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        const fishes = ["🐠","🐟","🎣","🐡","🍣","🍤"]
        return this.success(fishes[Math.floor(Math.random() * fishes.length)])
    },
})