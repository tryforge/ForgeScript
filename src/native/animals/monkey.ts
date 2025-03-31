import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$monkey",
    version: "2.3.0",
    description: "Returns a random monkey",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        const monkeys = ["🦍","🦧","🙈","🙊","🙉","🐒","🐵"]
        return this.success(monkeys[Math.floor(Math.random() * monkeys.length)])
    },
})