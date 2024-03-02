import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$isJSON",
    version: "1.4.0",
    aliases: [
        "$isValidJSON"
    ],
    description: "Checks whether given json is valid",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "json",
            description: "The json to check for",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, [ json ]) {
        try {
            void JSON.parse(json)
            return this.success(true)
        } catch (error) {
            return this.success(false)
        }
    },
})