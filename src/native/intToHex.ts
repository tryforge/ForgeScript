import { hex2int, int2hex } from "../functions/hex"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$intToHex",
    version: "1.2.0",
    brackets: true,
    description: "Turns integer to hex",
    unwrap: true,
    args: [
        {
            name: "int",
            description: "The integer to convert",
            rest: false,
            required: true,
            type: ArgType.Number
        }
    ],
    execute(ctx, [ hex ]) {
        return this.success(int2hex(hex))
    },
})