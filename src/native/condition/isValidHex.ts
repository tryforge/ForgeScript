import { ArgType, NativeFunction } from "../../structures"

export const MaxHexIntValue = 0xffffff as const
export const MinHexIntValue = 0 as const
export const HexHashtagStripping = /^#/

export default new NativeFunction({
    name: "$isValidHex",
    version: "1.3.0",
    description: "Checks whether given hex is a valid integer number between 0x00000 and 0xffffff.",
    unwrap: true,
    brackets: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "hex",
            rest: false,
            required: true,
            type: ArgType.String,
            description: "The hex to check for"
        }
    ],
    execute(ctx, [ hex ]) {
        const int = parseInt(hex.replace(HexHashtagStripping, ""), 16)
        return this.success(!isNaN(int) && int >= MinHexIntValue && int <= MaxHexIntValue)
    },
})