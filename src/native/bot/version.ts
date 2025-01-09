import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$version",
    version: "1.0.0",
    description: "Returns the package version the client is using",
    unwrap: false,
    output: ArgType.String,
    aliases: [
        "$packageVersion"
    ],
    execute(ctx) {
        return this.success(ctx.client.version)
    },
})
