import { execSync } from "child_process"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$exec",
    version: "1.0.0",
    brackets: true,
    description: "Runs a command in console",
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "command",
            description: "The command to execute",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    async execute(ctx, [command]) {
        try {
            const exec = await execSync(command, { encoding: "utf-8" })
            return this.success(exec)
        } catch (error: any) {
            return this.error(error)
        }
    },
})
