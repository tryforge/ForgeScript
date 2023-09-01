import { execSync } from "child_process"
import { ArgType, ErrorType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$exec",
    brackets: true,
    description: "Runs a command in console",
    unwrap: true,
    args: [
        {
            name: "command",
            description: "The command to execute",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    async execute(ctx, [ command ]) {
        try {
            const exec = await execSync(command, { encoding: "utf-8" })
            return Return.success(exec)
        } catch (error: any) {
            return Return.error(this.error(ErrorType.Custom, (error as Error).message))
        }
    },
})