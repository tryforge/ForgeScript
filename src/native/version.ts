import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$version",
    description: "Returns the package version you're using",
    unwrap: false,
    execute(ctx) {
        return Return.success(require("../../package.json").version)
    },
})