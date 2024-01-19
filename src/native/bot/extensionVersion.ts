import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$extensionVersion",
    version: "1.4.0",
    brackets: true,
    unwrap: true,
    description: "Returns the version a extension is running on",
    output: ArgType.String,
    args: [
        {
            name: "name",
            description: "The extension name to retrieve its version",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ name ]) {
        return this.success(ctx.client.getExtension(name)?.version  )
    }
})