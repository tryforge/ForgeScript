import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$break",
    version: "1.0.3",
    description: "Breaks the loop",
    unwrap: false,
    execute() {
        return this.break()
    },
})
