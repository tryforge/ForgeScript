import { execArgv } from "process"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$gc",
    version: "1.5.0",
    description: "Triggers JavaScript's garbage collector, only available if passed --expose-gc flag to node",
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        return this.success(
            execArgv.includes("--expose-gc") ?
                // eslint-disable-next-line no-undef
                (gc!(), true) : 
                false
        )
    },
})