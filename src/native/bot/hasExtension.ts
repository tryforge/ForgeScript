import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$hasExtension",
    version: "1.2.0",
    description: "Checks whether client has an extension",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The extension name to check for",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, [ ext ]) {
        return this.success(!!ctx.client.options.extensions?.some(x => x.name === ext))
    },
})