import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$nodeVersion",
    description: "Returns the node version",
    unwrap: false,
    execute(ctx) {
        // eslint-disable-next-line no-undef
        return Return.success(process.version)
    },
})