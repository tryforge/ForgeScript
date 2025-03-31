import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$dog",
    version: "2.3.0",
    description: "Returns a random dog",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        const dogs = ["🐶","🐕","🐩","🐕‍🦺","🦮"]
        return this.success(dogs[Math.floor(Math.random() * dogs.length)])
    },
})