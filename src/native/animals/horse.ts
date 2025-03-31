import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$horse",
    version: "2.3.0",
    description: "Returns a random horse",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        const horses = ["🐴","🐎","🎠","🏇"]
        return this.success(horses[Math.floor(Math.random() * horses.length)])
    },
})