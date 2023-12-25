import { hex2int } from "../../functions/hex"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$hexToInt",
    category: "number",
    version: "1.2.0",
    brackets: true,
    description: "Turns hex string to number",
    unwrap: true,
    args: [
        {
            name: "hex",
            description: "The hex to convert",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ hex ]) {
        return this.success(hex2int(hex))
    },
})