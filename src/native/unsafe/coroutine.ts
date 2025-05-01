/* eslint-disable no-undef */
import { Worker } from "worker_threads"
import { ArgType, ErrorType, NativeFunction, Return } from "../../structures"
import { once } from "events"

export default new NativeFunction({
    name: "$coroutine",
    version: "1.2.0",
    description: "Runs given code in a separate thread",
    experimental: true,
    unwrap: false,
    args: [
        {
            name: "code",
            description: "The code to run",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    async execute(ctx) {
        const code = this.displayField(0)!
        return this.success(
            await ctx.client.threading.run({
                code
            })
        )
    },
})