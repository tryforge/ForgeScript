import { ArgType, NativeFunction, Return } from "../../structures"

export const Numbers = "0123456789"
export const LowercaseLetters = "qwertyuiopasdfghjklzxcvbnm"
export const UppercaseLetters = LowercaseLetters.toUpperCase()

export const CharArray = [
    ...Numbers,
    ...LowercaseLetters,
    ...UppercaseLetters
]

export default new NativeFunction({
    name: "$randomString",
    version: "1.2.0",
    description: "Creates a random string",
    brackets: true,
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "length",
            description: "The length of the random string",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "characters",
            description: "The characters to use for this string",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ len, chars ]) {
        const arr = chars ? [...chars] : CharArray
        return this.success(Array.from({ length: len }, () => arr[Math.floor(Math.random() * arr.length)]).join(""))
    }
})