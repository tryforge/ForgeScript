import { ArgType, NativeFunction, Return } from "../../structures"

function digital(ms: number): string {
    const hours = Math.floor(ms / (1000 * 60 * 60))
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((ms % (1000 * 60)) / 1000)

    const HH = String(hours).padStart(2, "0")
    const MM = String(minutes).padStart(2, "0")
    const SS = String(seconds).padStart(2, "0")

    return `${HH}:${MM}:${SS}`
}

export default new NativeFunction({
    name: "$parseDigital",
    version: "1.5.0",
    description: "Parses given ms to digital format",
    brackets: true,
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "ms",
            description: "The ms to convert to digital format",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [ ms ]) {
        return this.success(digital(ms))
    },
})