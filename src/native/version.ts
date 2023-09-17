import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$version",
    version: "1.0.0",
    description: "Returns the package version you're using",
    unwrap: false,
    execute() {
        return Return.success(require("../../package.json").version)
    },
})
