import { ArgType, NativeFunction, Return } from "../structures"
import { stringify } from "node:querystring"

export default new NativeFunction({
    name: "$createQueryParams",
    version: "1.0.7",
    description: "Creates query params with given fields",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "param name; param value",
            description: "The param name followed by the value, (param1;value1)",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(_, [params]) {
        const obj: Record<string, string> = {}
        for (let i = 0, len = params.length; i < len; i += 2) {
            obj[params[i]] = params[i + 1]
        }
        return this.success(stringify(obj))
    },
})
