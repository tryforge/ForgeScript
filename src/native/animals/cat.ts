import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$cat",
    version: "2.3.0",
    description: "Returns a random cat",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        const cats = ["🐱","😻","😹","🙀","😿","😽","😺","😸","😾","😼","🐈","🐈‍⬛"]
        return this.success(cats[Math.floor(Math.random() * cats.length)])
    },
})