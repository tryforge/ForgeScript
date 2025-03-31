import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$duck",
    version: "2.3.0",
    description: "Returns a random duck",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        const ducks = ["🐣","🐥","🦆","🐤"]
        return this.success(ducks[Math.floor(Math.random() * ducks.length)])
    },
})