import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$toUpperCase",
    description: "Makes a string uppercase",
    unwrap: true,
    args: [
        {
            name: "string",
            description: "The string to turn uppercase",
            type: ArgType.String,
            rest: true,
            required: true
        }
    ],
    brackets: true,
    execute(ctx, [ values ]) {
        return Return.success(values.join(";").toUpperCase())   
    }
})